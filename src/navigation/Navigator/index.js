import { connect } from 'react-redux';
import SessionSelector from 'services/Session/selectors';
import MainNavigator from './MainNavigator';

const mapStateToProps = (state) => ({
  token: SessionSelector.getToken(state),
});
export default connect(mapStateToProps, null)(MainNavigator);
