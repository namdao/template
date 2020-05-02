import axios from 'axios';
import { doNothing } from 'utils/utility';
import Constants from 'constant/appConstant';
import * as ErrorConstants from 'constant/errorConstant';
import Platform from 'utils/platform';
import Logger from 'utils/logger';
import { l10n } from 'languages';

const { ERROR_CODES } = ErrorConstants;

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

const interceptorsInstance = axios.interceptors;

/**
 * setup axios included content-type & deviceId
 */
const init = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Platform: Platform.OS,
  };
  const auth = axios.defaults.headers?.Authorization;
  if (auth) {
    headers.Authorization = auth;
  }
  axios.defaults.headers = headers;
};

/**
 * set baseUrl for axios
 * if in production environment, baseUrl alway from config
 *
 * else get from params
 *
 * TODO: This function look like weird and not consistency by the way output depend on environment values.
 * Need refactor it
 *
 * @param {String} baseUrl
 */
const setBaseUrl = (baseUrl) => {
  let newBaseUrl;
  if (baseUrl) {
    newBaseUrl = baseUrl;
  } else if (Platform.isProduction) {
    newBaseUrl = Constants.URL_PROD;
  }
  axios.defaults.baseURL = newBaseUrl;

  return newBaseUrl;
};

const clearBaseUrl = () => {
  axios.defaults.baseURL = '';
};

const setHeaderToken = (newToken) => {
  if (!axios.defaults.headers || !newToken) {
    Logger.warn('-------- axios headers empty');
    return;
  }

  const bearerToken = `Bearer ${newToken}`;
  const currentToken = axios?.defaults?.headers?.Authorization || '';

  if (currentToken === bearerToken) {
    Logger.warn('-------- axios headers token SAME');
    return;
  }
  axios.defaults.headers.Authorization = bearerToken;
};

const clearHeaderToken = () => {
  axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Platform: Platform.OS,
  };
};

const getUnhandledErrorMessage = (errors) => {
  if (Platform.isProduction) return l10n.unknown_error;
  let message;

  if (!errors) {
    message = 'empty error message';
    return message;
  }

  message = errors.message || errors.toString();
  return message;
};

const getErrorMessagesFromServer = (error) => {
  const { messages, _error, errors } = error;
  if (typeof messages === 'string') {
    return messages;
  }

  if (typeof errors === 'string') {
    return errors;
  }

  if (typeof messages === 'object') {
    const errMessage = Object.values(messages);
    return errMessage.join('');
  }
  if (Array.isArray(errors)) {
    return messages.join(' ');
  }

  if (typeof _error?.message === 'string') {
    return _error.message;
  }

  if (typeof _error === 'string') {
    return _error;
  }

  return getUnhandledErrorMessage(error);
};

const setupOnResponseInterceptors = (
  // onReceivedToken = doNothing,
  onUnAuthorized = doNothing,
  onBlacklist = doNothing
) => {
  /**
   * handle error response
   */
  const onResponseError = (errors) => {
    let alertMessage = l10n.unknown_error;

    const { code } = errors;
    if (!code) {
      switch (errors.messages) {
        case 'Network Error':
          alertMessage = l10n.no_internet_connection;
          break;
        default:
          alertMessage = getUnhandledErrorMessage(errors);
          break;
      }
      throw new Error(alertMessage);
    }

    /**
     * handle error by http error code
     */
    switch (code) {
      case ERROR_CODES.UNAUTHORIZED:
        onUnAuthorized({ url: errors?.config?.url });
        break;
      case ERROR_CODES.BLACKLIST:
        onBlacklist();
        break;
      default:
        alertMessage = getErrorMessagesFromServer(errors);
        break;
    }

    const finalError = new Error(alertMessage);
    finalError.code = code;
    // finalError.response = errors.response;

    throw finalError;
  };

  /**
   * handle success response
   */
  const onResponseSuccess = (response) => {
    // const authorization = response?.headers?.authorization || '';
    // if (authorization) {
    //   setHeaderToken(authorization, `onReceivedToken:${response?.config.url}`);
    //   onReceivedToken(authorization);
    // }
    const { data, errors } = response.data;
    if (errors) {
      return onResponseError(errors);
    }
    return data;
  };

  // Check interceptor DEFAULT exist in list handlers
  if (interceptorsInstance?.response?.handlers?.length < 1) {
    interceptorsInstance.response.use(onResponseSuccess, onResponseError);
  }
};

const SetupAxios = {
  init,
  setBaseUrl,
  clearBaseUrl,
  setHeaderToken,
  clearHeaderToken,
  setupOnResponseInterceptors,
};

export default SetupAxios;
