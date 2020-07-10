// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */
import Crashlytics from 'services/Crashlytics';
import { ERROR_TYPE_CRASH } from 'constant/errorConstant';

class Logger {
  static log(params) {
    console.log(params);
    // Write log data into crashlytics
    Crashlytics.getInstance().writeLog(JSON.stringify(params));
  }

  static warn(...params) {
    console.warn(...params);
  }

  static error(params, type = ERROR_TYPE_CRASH.ERROR_DATA) {
    console.error(params);
    // Write log error to Crashlytics
    const errorCrash = params;
    errorCrash.message = `${type}: ${JSON.stringify(params)}`;
    if (params?.messages) {
      errorCrash.message = `${type}: ${params.messages} `;
    }
    Crashlytics.getInstance().writeLogError(errorCrash);
  }
}

export default Logger;
