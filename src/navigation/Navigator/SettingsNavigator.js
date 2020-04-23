import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'scenes/Home';
import DetailScreen from 'scenes/Detail';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={HomeScreen} />
      <SettingsStack.Screen name="Details" component={DetailScreen} />
    </SettingsStack.Navigator>
  );
};
export default SettingsNavigator;
