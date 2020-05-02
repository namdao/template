import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'scenes/Splash';
import PropTypes from 'prop-types';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { DrawerMenu, AUTH_NAVIGATOR, ConfigNavigator, SPLASH } from './ConstantNavigator';

const AppStack = createStackNavigator();
export default class MainNavigator extends Component {
  static propTypes = {
    role: PropTypes.shape({}),
  };

  static defaultProps = {
    role: {
      id: '',
      name: '',
    },
  };

  renderMainStack = () => {
    return (
      <AppStack.Navigator headerMode={ConfigNavigator.HEADER.NONE}>
        <AppStack.Screen name={DrawerMenu.DASHBOARD} component={DrawerNavigator} />
      </AppStack.Navigator>
    );
  };

  renderAuthStack = () => {
    return (
      <AppStack.Navigator
        initialRouteName={SPLASH}
        screenOptions={{ gestureEnabled: ConfigNavigator.SWIPEBACK.FALSE }}
        headerMode={ConfigNavigator.HEADER.NONE}
      >
        <AppStack.Screen name={SPLASH} component={Splash} />
        <AppStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
      </AppStack.Navigator>
    );
  };

  render() {
    const { role } = this.props;
    if (!role.id) {
      return this.renderAuthStack();
    }
    return this.renderMainStack();
  }
}
