import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'scenes/Splash';
import PropTypes from 'prop-types';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { CONFIG, STACK } from './ConstantNavigator';

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
      <AppStack.Navigator headerMode={CONFIG.HEADER.NONE}>
        <AppStack.Screen name={STACK.DRAWER_MENU.DASHBOARD} component={DrawerNavigator} />
      </AppStack.Navigator>
    );
  };

  renderAuthStack = () => {
    return (
      <AppStack.Navigator
        initialRouteName={STACK.SPLASH}
        screenOptions={{ gestureEnabled: CONFIG.SWIPEBACK.FALSE }}
        headerMode={CONFIG.HEADER.NONE}
      >
        <AppStack.Screen name={STACK.SPLASH} component={Splash} />
        <AppStack.Screen name={STACK.AUTH_NAVIGATOR} component={AuthNavigator} />
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
