import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderNavigator from '../OrderNavigator';
import SettingsNavigator from '../SettingsNavigator';
import { STACK } from '../ConstantNavigator';

const BottomTab = createBottomTabNavigator();
const TabDesignNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={STACK.TAB_MENU.ORDER_DRAFT} component={OrderNavigator} />
      <BottomTab.Screen name={STACK.TAB_MENU.SETTINGS} component={SettingsNavigator} />
    </BottomTab.Navigator>
  );
};

export default TabDesignNavigator;
