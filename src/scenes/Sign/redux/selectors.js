const getDataFormLogin = (state) => state.form.LOGIN.values;
const getRoleUser = (state) => (state.data.user.roles.length > 0 ? state.data.user.roles[0] : {});

const SignSelectors = {
  getDataFormLogin,
  getRoleUser,
};
export default SignSelectors;
