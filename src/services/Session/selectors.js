const getSession = (state) => state.services.session;
const getUserId = (state) => state.services.session.userId;
const getToken = (state) => state.services.session.token;
const SessionSelector = {
  getSession,
  getToken,
  getUserId,
};

export default SessionSelector;
