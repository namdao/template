import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'scenes/Login';

import { ConfigNavigator, LOGIN } from './ConstantNavigator';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode={ConfigNavigator.HEADER.NONE}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
