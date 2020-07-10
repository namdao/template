import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkAutoLogin, updateToken, resetAllApp } from 'services/Session/actions';
import AppStateSelector from 'services/AppState/selectors';
import SessionSelector from 'services/Session/selectors';
import CommonService from './CommonService';

const mapStateToProps = (state) => ({
  appState: AppStateSelector.getAppState(state),
  token: SessionSelector.getToken(state),
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      checkAutoLogin,
      resetAllApp,
      updateToken,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonService);
