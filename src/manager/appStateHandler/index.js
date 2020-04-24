import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAppState } from 'services/AppState/actions';
import AppStateSelector from 'services/AppState/selectors';
import AppStateHandler from './AppStateHandler';

const mapStateToProps = (state) => ({
  appState: AppStateSelector.getAppState(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ setAppState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppStateHandler);
