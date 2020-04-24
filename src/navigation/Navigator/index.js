import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { MAIN_NAVIGATOR, AUTH_NAVIGATOR, ConfigNavigator } from './ConstantNavigator';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName={MAIN_NAVIGATOR} headerMode={ConfigNavigator.HEADER.NONE}>
      <AppStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
      <AppStack.Screen name={MAIN_NAVIGATOR} component={TabNavigator} />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
