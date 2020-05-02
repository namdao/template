import React from 'react';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
import { ROLE } from 'constant/appConstant';
import TabSale from './TabSaleNavigator';
import TabDesign from './TabDesignNavigator';
import styles from '../styles';

const TabNavigator = ({ style, role }) => {
  const checkTabByRole = () => {
    switch (role?.name) {
      case ROLE.ADMIN || ROLE.SALE:
        return <TabSale />;
      case ROLE.DESIGNER:
        return <TabDesign />;
      default:
        return <TabSale />;
    }
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
export default TabNavigator;
