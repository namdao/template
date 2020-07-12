import Crashlytics from '@react-native-firebase/crashlytics';
import Platform from 'utils/platform';

export default class CrashlyticsManager {
  static myInstance = null;

  client = null;

  /**
   * @returns {CrashlyticsManager}
   */
  static getInstance() {
    if (CrashlyticsManager.myInstance == null) {
      CrashlyticsManager.myInstance = new CrashlyticsManager();
    }
    return this.myInstance;
  }

  /**
   * Set init User
   */
  setInitUser = (user) => {
    if (Platform.isProduction) {
      Crashlytics().setUserId(user.id.toString());
      Crashlytics().setUserName(user.username);
      Crashlytics().setUserEmail(user.email);
    }
  };

  /**
   * Set log error
   */
  writeLogError = (error) => {
    Crashlytics().setAttribute({
      env: Platform.isProduction ? 'PRODUCTION' : 'DEV',
    });
    Crashlytics().recordError(error);
  };

  /**
   * Set log data
   */
  writeLog = (log) => {
    Crashlytics().log(log);
  };
}
