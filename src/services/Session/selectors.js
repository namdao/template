const getSession = (state) => state.services.session;
const getUserId = (state) => state.services.session.userId;
const getToken = (state) => state.services.session.token;
const getDeviceToken = (state) => state.services.session.deviceToken;
const SessionSelector = {
  getSession,
  getToken,
  getUserId,
  getDeviceToken,
};

export default SessionSelector;
