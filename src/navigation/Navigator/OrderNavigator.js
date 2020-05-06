import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screen
 */
import OrderListDraft from 'scenes/OrderList/scenes/OrderListDraft';
import DetailScreen from 'scenes/Detail';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colors';
import PropTypes from 'prop-types';
import BackButton from 'components/BackButton/BackButton';
import IconButton from 'components/IconButton';
import SearchBar from 'components/SearchBar';
import { l10n } from 'languages';
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
      initialRouteName={STACK.ORDERLISTDRAFT}
      screenOptions={{ ...OptionHeaderNavigator }}
    >
      <OrderStack.Screen
        name={STACK.ORDERLISTDRAFT}
        component={OrderListDraft}
        options={{
          ...CONFIG.HEADERALIGN.LEFT,
          title: l10n.title_order_draft,
          headerLeft: () => (
            <IconButton iconStyles={styles.menuBar} name="bars" onPress={toggleDrawer} />
          ),
          headerRight: () => <SearchBar />,
        }}
      />
      <OrderStack.Screen name={STACK.DETAILS} component={DetailScreen} />
    </OrderStack.Navigator>
  );
};

OrderNavigator.propTypes = {
  navigation: PropTypes.objectOf({}),
};
OrderNavigator.defaultProps = {
  navigation: {},
};
export default OrderNavigator;
