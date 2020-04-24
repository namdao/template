import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import SettingsStack from './SettingsNavigator';
import { TabMenu } from './ConstantNavigator';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={TabMenu.HOME} component={DrawerNavigator} />
      <BottomTab.Screen name={TabMenu.SETTINGS} component={SettingsStack} />
    </BottomTab.Navigator>
  );
};
export default TabNavigator;
