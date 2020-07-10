import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screen
 */
import OrderDetail from 'scenes/Detail';
/**
 * Component
 */
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colors';
import BackButton from 'components/BackButton/BackButton';
/**
 * utils
 */
import { l10n } from 'languages';
import { STACK, CONFIG } from './ConstantNavigator';
import styles from './styles';

const OrderStoredStack = createStackNavigator();
const OptionHeaderNavigator = {
  headerTintColor: Colors.white,
  headerBackImage: () => <BackButton />,
  headerBackTitleVisible: false,
  headerBackground: () => (
    <LinearGradient colors={[Colors.mainBlue, Colors.mainBlue2]} style={styles.flex1} />
  ),
};

const OrderStoredNavigator = () => {
  return (
    <OrderStoredStack.Navigator
      initialRouteName={STACK.ORDER_LIST_STORED}
      screenOptions={{ ...OptionHeaderNavigator }}
    >
      <OrderStoredStack.Screen
        name={STACK.ORDER_LIST_STORED}
        component={OrderDetail}
        options={{
          ...CONFIG.HEADER_ALIGN.CENTER,
          title: l10n.title_order_list_stored,
        }}
      />
    </OrderStoredStack.Navigator>
  );
};

export default OrderStoredNavigator;
