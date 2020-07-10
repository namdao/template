const getRoleUser = (state) => {
  return state.data.user.roles.length > 0 ? state.data.user.roles[0] : {};
};
const getUser = (state) => state.data.user;
const SignSelectors = {
  getRoleUser,
  getUser,
};
export default SignSelectors;
