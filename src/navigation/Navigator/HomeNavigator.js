import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from 'scenes/Home';
import DetailScreen from 'scenes/Detail';
import { HOME, DETAILS } from './ConstantNavigator';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={HOME}>
      <HomeStack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          title: 'Profile',
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        }}
      />
      <HomeStack.Screen
        name={DETAILS}
        component={DetailScreen}
        options={{
          title: 'AAA',
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
