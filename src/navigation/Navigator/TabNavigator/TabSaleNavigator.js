import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from '../HomeNavigator';
import SettingsStack from '../SettingsNavigator';
import { TabMenu } from '../ConstantNavigator';

const BottomTab = createBottomTabNavigator();
const TabSaleNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={TabMenu.HOME} component={HomeNavigator} />
      <BottomTab.Screen name={TabMenu.SETTINGS} component={SettingsStack} />
    </BottomTab.Navigator>
  );
};

export default TabSaleNavigator;
