import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateScreen, resetNavigator, jumpToTab } from 'navigation/Actions/rootNavigation';
import { updateServerBaseUrl } from 'services/ServerConfig/actions';
import ServerConfigSelector from 'services/ServerConfig/selectors';

import Home from './Home';

const mapStateToProps = (state) => ({
  baseUrl: ServerConfigSelector.getServerBaseUrl(state),
});

const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      updateServerBaseUrl,
    },
    dispatch
  );
  return {
    navigateScreen,
    resetNavigator,
    jumpToTab,
    ...binActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
