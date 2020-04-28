const getSession = (state) => state.services.session;
const getUserId = (state) => state.services.session.userId;
const getToken = (state) => state.services.session.token;
const getAuthenticate = (state) => state.services.session.isAuthenticate;
const SessionSelector = {
  getSession,
  getAuthenticate,
  getToken,
  getUserId,
};

export default SessionSelector;
