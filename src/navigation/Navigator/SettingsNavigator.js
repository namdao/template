import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderListDraft from 'scenes/OrderList/scenes/OrderListDraft';
import DetailScreen from 'scenes/Detail';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={OrderListDraft} />
      <SettingsStack.Screen name="Details" component={DetailScreen} />
    </SettingsStack.Navigator>
  );
};
export default SettingsNavigator;
