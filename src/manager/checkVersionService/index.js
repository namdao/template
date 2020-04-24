import { connect } from 'react-redux';
import AppStateSelector from 'services/AppState/selectors';
import CheckVersionService from './CheckVersionService';

const mapStateToProps = (state) => ({
  appState: AppStateSelector.getAppState(state),
});

export default connect(mapStateToProps, null)(CheckVersionService);
