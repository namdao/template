import { connect } from 'react-redux';
import { navigateScreen, resetNavigator, jumpToTab } from 'navigation/Actions/rootNavigation';
import FlatListDefault from './FlatListDefault';

const mapDispatchToProps = () => {
  return {
    navigateScreen,
    resetNavigator,
    jumpToTab,
  };
};

export default connect(null, mapDispatchToProps)(FlatListDefault);
