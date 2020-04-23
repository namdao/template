import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { navigateScreen } from 'navigation/Actions';

export default class HomeScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Home screen</Text>
        <Button title="Go to Details" onPress={() => navigation.dispatch(navigateScreen())} />
        <Button title="Open menu" onPress={() => navigation.openDrawer()} />
      </View>
    );
  }
}
