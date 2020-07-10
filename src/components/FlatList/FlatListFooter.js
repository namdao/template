import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import colors from 'constant/colors';

class FlatListFooter extends PureComponent {
  state = {
    isLoading: true,
  };

  loadingSuccess = (isLoading) => {
    this.setState({ isLoading });
  };

  render() {
    const { isLoading } = this.state;

    if (!isLoading) return null;
    return <ActivityIndicator size="small" color={colors.mainBlue2} />;
  }
}
export default FlatListFooter;
