import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignSelector from 'scenes/Sign/redux/selectors';
import { logout } from 'services/Session/actions';
import DrawerNavigator from './DrawerNavigator';

const mapStateToProps = (state) => ({
  user: SignSelector.getUser(state),
});
const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      logout,
    },
    dispatch
  );
  return {
    ...binActionCreators,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
