import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screen
 */
import Settings from 'scenes/Settings';
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

const SettingsStack = createStackNavigator();
const OptionHeaderNavigator = {
  headerTintColor: Colors.white,
  headerBackImage: () => <BackButton />,
  headerBackTitleVisible: false,
  headerBackground: () => (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={[Colors.main2, Colors.main1]}
      style={styles.flex1}
    />
  ),
};

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName={STACK.ORDER_LIST_PROCESS}
      screenOptions={{ ...OptionHeaderNavigator }}
    >
      <SettingsStack.Screen
        name={STACK.ORDER_LIST_PROCESS}
        component={Settings}
        options={{
          ...CONFIG.HEADER_ALIGN.CENTER,
          title: l10n.title_order_list_process,
        }}
        listeners={({ navigation: navBottom }) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
