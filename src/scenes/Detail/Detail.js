import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';

export default class Details extends PureComponent {
  render() {
    const { navigation, goBack } = this.props;
    return (
      <View>
        <Text>Detail screen</Text>
        <Button title="Go back" onPress={() => goBack()} />
        <Button title="Open menu" onPress={() => navigation.openDrawer()} />
      </View>
    );
  }
}
