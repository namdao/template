import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Dashboard" component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};
export default DrawerNavigator;
