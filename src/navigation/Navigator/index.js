import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'scenes/Splash';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { MAIN_NAVIGATOR, AUTH_NAVIGATOR, ConfigNavigator, SPLASH } from './ConstantNavigator';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName={SPLASH} headerMode={ConfigNavigator.HEADER.NONE}>
      <AppStack.Screen name={SPLASH} component={Splash} />
      <AppStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
      <AppStack.Screen name={MAIN_NAVIGATOR} component={TabNavigator} />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
