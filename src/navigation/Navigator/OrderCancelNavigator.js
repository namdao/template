import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screen
 */
import Detail from 'scenes/Detail';
/**
 * Component
 */
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colors';
// import PropTypes from 'prop-types';
import BackButton from 'components/BackButton/BackButton';
/**
 * utils
 */
import { l10n } from 'languages';
import { showBottomTab } from 'navigation/Actions/rootNavigation';
import { STACK, CONFIG } from './ConstantNavigator';
import styles from './styles';

const OrderCancelStack = createStackNavigator();
const OptionHeaderNavigator = {
  headerTintColor: Colors.white,
  headerBackImage: () => <BackButton />,
  headerBackTitleVisible: false,
  headerBackground: () => (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={[Colors.warningFollow[0], Colors.warningFollow[2]]}
      style={styles.flex1}
    />
  ),
};

const OrderCancelNavigator = () => {
  return (
    <OrderCancelStack.Navigator
      initialRouteName={STACK.ORDER_LIST_CANCEL}
      screenOptions={{ ...OptionHeaderNavigator }}
    >
      <OrderCancelStack.Screen
        name={STACK.ORDER_LIST_CANCEL}
        component={Detail}
        options={{
          ...CONFIG.HEADER_ALIGN.CENTER,
          title: l10n.title_order_cancel,
        }}
        listeners={({ navigation: navBottom }) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
    </OrderCancelStack.Navigator>
  );
};

export default OrderCancelNavigator;
