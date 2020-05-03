import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from '../HomeNavigator';
import SettingsNavigator from '../SettingsNavigator';
import { STACK } from '../ConstantNavigator';

const BottomTab = createBottomTabNavigator();
const TabSaleNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={STACK.TAB_MENU.HOME} component={HomeNavigator} />
      <BottomTab.Screen name={STACK.TAB_MENU.SETTINGS} component={SettingsNavigator} />
    </BottomTab.Navigator>
  );
};

export default TabSaleNavigator;
