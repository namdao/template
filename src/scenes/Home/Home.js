import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { DETAILS } from 'navigation/Navigator/ConstantNavigator';

export default class HomeScreen extends PureComponent {
  render() {
    const { navigation, navigateScreen, resetNavigator, jumpToTab } = this.props;
    return (
      <View>
        <Text>Home screen</Text>
        <Button title="Go to Details" onPress={() => navigateScreen(DETAILS)} />
        <Button title="Open menu" onPress={() => navigation.openDrawer()} />
        <Button title="Reset " onPress={() => resetNavigator()} />
        <Button title="Jump to settings " onPress={() => jumpToTab('settings')} />
      </View>
    );
  }
}
