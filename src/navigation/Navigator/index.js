import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'navigation/Actions/rootNavigation';
import { updateServerBaseUrl } from 'services/ServerConfig/actions';
import SignSelector from 'scenes/Sign/redux/selectors';
import MainNavigator from './MainNavigator';

const mapStateToProps = (state) => ({
  role: SignSelector.getRoleUser(state),
});

const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      updateServerBaseUrl,
    },
    dispatch
  );
  return {
    goBack,
    ...binActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
