import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'scenes/Sign/scenes/Login';
import LoginFirebase from 'scenes/Sign/scenes/LoginFirebase';
import { CONFIG, STACK } from './ConstantNavigator';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode={CONFIG.HEADER.NONE}>
      <AuthStack.Screen name="firebaselogin" component={LoginFirebase} />
      <AuthStack.Screen name={STACK.LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
