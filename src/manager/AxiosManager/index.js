import axios from 'axios';
import { doNothing } from 'utils/utility';
import Constants from 'constant/appConstant';
import * as ErrorConstants from 'constant/errorConstant';
import Platform from 'utils/platform';
// import { l10n } from 'languages';

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
    console.warn('-------- axios headers empty');
    return;
  }

  const bearerToken = `Bearer ${newToken}`;
  const currentToken = axios?.defaults?.headers?.Authorization || '';

  if (currentToken === bearerToken) {
    console.warn('-------- axios headers token SAME');
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

const getUnhandledErrorMessage = (error) => {
  if (Platform.isProduction) return 'l10n.unknown_error';
  let message;

  if (!error) {
    message = 'empty error message';
    return message;
  }

  message = error.message || error.toString();
  return message;
};

const getErrorMessagesFromServer = (responseData, error) => {
  const { messages, _error, errors } = responseData;
  if (typeof messages === 'string') {
    return messages;
  }

  if (typeof errors === 'string') {
    return errors;
  }

  if (Array.isArray(errors)) {
    return errors.join(' ');
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
  onReceivedToken = doNothing,
  onUnAuthorized = doNothing,
  onBlacklist = doNothing
) => {
  /**
   * handle success response
   */
  const onResponseSuccess = (response) => {
    const authorization = response?.headers?.authorization || '';
    if (authorization) {
      setHeaderToken(authorization, `onReceivedToken:${response?.config.url}`);
      onReceivedToken(authorization);
    }
    return response.data;
  };

  /**
   * handle error response
   */
  const onResponseError = (error) => {
    let alertMessage = 'l10n.unknown_error';

    if (!error.response) {
      switch (error.message) {
        case 'Network Error':
          alertMessage = 'l10n.no_internet_connection';
          break;
        default:
          alertMessage = getUnhandledErrorMessage();
          break;
      }
      throw new Error(alertMessage);
    }

    const {
      response: { status, data },
    } = error;
    const errorDataFromServer = data || {};

    /**
     * handle error by http error code
     */
    switch (status) {
      case ERROR_CODES.UNAUTHORIZED:
        onUnAuthorized({ url: error?.config?.url });
        break;
      case ERROR_CODES.BLACKLIST:
        onBlacklist();
        break;
      default:
        alertMessage = getErrorMessagesFromServer(errorDataFromServer, error);
        break;
    }

    const finalError = new Error(alertMessage);
    finalError.code = status;
    finalError.response = error.response;

    throw finalError;
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
