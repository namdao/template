import { connect } from 'react-redux';
import SignSelector from 'scenes/Sign/redux/selectors';
import MainNavigator from './MainNavigator';

const mapStateToProps = (state) => ({
  role: SignSelector.getRoleUser(state),
});
export default connect(mapStateToProps, null)(MainNavigator);
