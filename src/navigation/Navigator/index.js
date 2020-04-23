import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="TabNavigator" headerMode="none">
      <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
      <AppStack.Screen name="TabNavigator" component={TabNavigator} />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
