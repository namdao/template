import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { l10n } from 'languages';
import { DETAILS } from 'navigation/Navigator/ConstantNavigator';

export default class HomeScreen extends PureComponent {
  render() {
    const { navigation, navigateScreen, resetNavigator, jumpToTab } = this.props;
    return (
      <View>
        <Text>Home screen</Text>
        <Button title={l10n.go_detail} onPress={() => navigateScreen(DETAILS)} />
        <Button title={l10n.open_menu} onPress={() => navigation.openDrawer()} />
        <Button title="Reset " onPress={() => resetNavigator()} />
        <Button title="Jump to settings " onPress={() => jumpToTab('settings')} />
      </View>
    );
  }
}
