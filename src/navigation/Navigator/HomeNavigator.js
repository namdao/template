import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'scenes/Home';
import DetailScreen from 'scenes/Detail';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
