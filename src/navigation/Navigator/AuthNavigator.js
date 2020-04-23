import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'scenes/Login';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
