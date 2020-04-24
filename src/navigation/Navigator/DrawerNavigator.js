import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenu } from './ConstantNavigator';
import HomeNavigator from './HomeNavigator';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name={DrawerMenu.DASHBOARD} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};
export default DrawerNavigator;
