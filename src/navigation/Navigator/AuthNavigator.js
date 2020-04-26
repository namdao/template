import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'scenes/Login';
import Splash from 'scenes/Splash';
import { ConfigNavigator } from './ConstantNavigator';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode={ConfigNavigator.HEADER.NONE}>
      <AuthStack.Screen name="Spash" component={Splash} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
