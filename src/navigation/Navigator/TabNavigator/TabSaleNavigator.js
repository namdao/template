import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import { l10n } from 'languages';
import colors from 'constant/colors';
import OrderNavigator from '../OrderNavigator';
import OrderCancelNavigator from '../OrderCancelNavigator';
import OrderStoredNavigator from '../OrderStoredNavigator';
import SettingsNavigator from '../SettingsNavigator';
import ActionBottomTab from './ActionBottomTab';
import { STACK } from '../ConstantNavigator';
import CustomTabBar, { EmptyComponent } from './CustomTabBar';

const BottomTab = createBottomTabNavigator();
const ActionBtnRef = React.createRef();

const TabSaleNavigator = ({ badgeCount, ...rest }) => {
  return (
    <>
      <ActionBottomTab ref={ActionBtnRef} {...rest} />
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: colors.mainBlue2,
          inactiveBackgroundColor: colors.mainBlue2,
          inactiveTintColor: colors.white,
          activeBackgroundColor: colors.white,
        }}
        tabBar={(propsTabBar) => (
          <CustomTabBar {...propsTabBar} badgeCount={badgeCount} ActionBtnRef={ActionBtnRef} />
        )}
      >
        <BottomTab.Screen
          options={{
            tabBarLabel: l10n.tab_home,
          }}
          key={STACK.TAB_MENU.ORDER_DRAFT}
          name={STACK.TAB_MENU.ORDER_DRAFT}
          component={OrderNavigator}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: l10n.tab_order,
          }}
          key={STACK.TAB_MENU.ORDER_LIST}
          name={STACK.TAB_MENU.ORDER_LIST}
          component={OrderStoredNavigator}
        />
        <BottomTab.Screen name={STACK.TAB_MENU.ACTION_BUTTON} component={EmptyComponent} />
        <BottomTab.Screen
          options={{
            tabBarLabel: l10n.tab_settings,
          }}
          key={STACK.TAB_MENU.ORDER_CANCEL}
          name={STACK.TAB_MENU.ORDER_CANCEL}
          component={OrderCancelNavigator}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: l10n.tab_profile,
          }}
          key={STACK.TAB_MENU.SETTINGS}
          name={STACK.TAB_MENU.SETTINGS}
          component={SettingsNavigator}
        />
      </BottomTab.Navigator>
    </>
  );
};
TabSaleNavigator.propTypes = {
  badgeCount: PropTypes.number,
};
TabSaleNavigator.defaultProps = {
  badgeCount: 0,
};
export default memo(TabSaleNavigator);
