import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
/**
 * Screen
 */
import OrderListDraft from 'scenes/OrderList/scenes/OrderListDraft';
/**
 * Component
 */
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colors';
import BackButton from 'components/BackButton/BackButton';
import IconButton from 'components/IconButton';
/**
 * utils
 */
import { l10n } from 'languages';
import { showBottomTab } from 'navigation/Actions/rootNavigation';
import { STACK, CONFIG } from './ConstantNavigator';
import styles from './styles';

const OrderStack = createStackNavigator();
const OptionHeaderNavigator = {
  headerTintColor: Colors.white,
  headerBackImage: () => <BackButton />,
  headerBackTitleVisible: false,
  headerBackground: () => (
    <LinearGradient colors={[Colors.mainBlue, Colors.mainBlue2]} style={styles.flex1} />
  ),
};

const OrderNavigator = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <OrderStack.Navigator
      initialRouteName={STACK.ORDER_LIST_DRAFT}
      screenOptions={{ ...OptionHeaderNavigator }}
    >
      <OrderStack.Screen
        name={STACK.ORDER_LIST_DRAFT}
        component={OrderListDraft}
        options={{
          ...CONFIG.HEADER_ALIGN.LEFT,
          title: l10n.title_order_draft,
          headerLeft: () => (
            <IconButton iconStyles={styles.menuBar} name="md-menu" onPress={toggleDrawer} />
          ),
        }}
        listeners={({ navigation: navBottom }) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
    </OrderStack.Navigator>
  );
};

OrderNavigator.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};
OrderNavigator.defaultProps = {
  navigation: {},
};
export default OrderNavigator;
