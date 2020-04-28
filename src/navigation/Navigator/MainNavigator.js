import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'scenes/Splash';
import PropTypes from 'prop-types';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { TAB_NAVIGATOR, AUTH_NAVIGATOR, ConfigNavigator, SPLASH } from './ConstantNavigator';

const AppStack = createStackNavigator();
export default class MainNavigator extends Component {
  renderMainStack = () => {
    return (
      <AppStack.Navigator headerMode={ConfigNavigator.HEADER.NONE}>
        <AppStack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
      </AppStack.Navigator>
    );
  };

  renderAuthStack = () => {
    return (
      <AppStack.Navigator initialRouteName={SPLASH} headerMode={ConfigNavigator.HEADER.NONE}>
        <AppStack.Screen name={SPLASH} component={Splash} />
        <AppStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
      </AppStack.Navigator>
    );
  };

  render() {
    const { isAuthenticate } = this.props;
    if (!isAuthenticate) {
      return this.renderAuthStack();
    }
    return this.renderMainStack();
  }
}
MainNavigator.propTypes = {
  isAuthenticate: PropTypes.bool,
};

MainNavigator.defaultProps = {
  isAuthenticate: false,
};
// const AppNavigator = () => {
//   return (
//     <AppStack.Navigator initialRouteName={SPLASH} headerMode={ConfigNavigator.HEADER.NONE}>
//       <AppStack.Screen name={SPLASH} component={Splash} />
//       <AppStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
//       <AppStack.Screen name={MAIN_NAVIGATOR} component={TabNavigator} />
//     </AppStack.Navigator>
//   );
// };
// export default AppNavigator;
