import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import SettingsStack from './SettingsNavigator';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={DrawerNavigator} />
      <BottomTab.Screen name="Settings" component={SettingsStack} />
    </BottomTab.Navigator>
  );
};
export default TabNavigator;
