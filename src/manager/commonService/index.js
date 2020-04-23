import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkAutoLogin, updateToken, logout } from 'services/Session/actions';
// import { navigateToLoginStack } from 'navigation/actions';
import AppStateSelector from 'services/AppState/selectors';
import SessionSelector from 'services/Session/selectors';
import CommonService from './CommonService';

const mapStateToProps = (state) => ({
  appState: AppStateSelector.getAppState(state),
  token: SessionSelector.getToken(state),
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      checkAutoLogin,
      logout,
      updateToken,
      // navigateToLoginStack,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CommonService);
