import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkAutoLogin, updateToken, logout } from 'services/Session/actions';
import AppStateSelector from 'services/AppState/selectors';
import SessionSelector from 'services/Session/selectors';
import CommonService from './CommonService';

const mapStateToProps = (state) => ({
  appState: AppStateSelector.getAppState(state),
  token: SessionSelector.getToken(state),
});
const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      checkAutoLogin,
      logout,
      updateToken,
    },
    dispatch
  );
  return {
    ...binActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonService);
