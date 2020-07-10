import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
import TabSale from './TabSaleNavigator';
import styles from '../styles';

const TabNavigator = ({ style }) => {
  const checkTabByRole = () => {
    return <TabSale />;
  };
  return <Animated.View style={[styles.stack, style]}>{checkTabByRole()}</Animated.View>;
};

TabNavigator.propTypes = {
  role: PropTypes.shape({}),
  style: PropTypes.shape({}),
};
TabNavigator.defaultProps = {
  role: {},
  style: {},
};
export default memo(TabNavigator);
