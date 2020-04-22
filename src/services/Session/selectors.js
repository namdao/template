const getSession = (state) => state.services.session;
const getUserId = (state) => state.services.session.userId;
const getToken = (state) => state.services.session.token;
const getStringeeToken = (state) => state.services.session.stringeeToken;
const getFCMToken = (state) => state.services.session.fcmToken;
const getOneSignalPushKey = (state) => state.services.session.oneSignalPushKey;
const getLastTimeCheckVersion = (state) => state.services.session.lastTimeCheckVersion;
const SessionSelector = {
  getFCMToken,
  getOneSignalPushKey,
  getSession,
  getStringeeToken,
  getToken,
  getUserId,
  getLastTimeCheckVersion,
};

export default SessionSelector;
