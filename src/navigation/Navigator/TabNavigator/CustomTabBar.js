import React, { memo } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from 'constant/colors';
import BasedText from 'components/BasedText';
import Container from 'components/Container';
import { resFont } from 'utils/screen';
import { STACK } from '../ConstantNavigator';
import styles from './styles';

export const EmptyComponent = () => null;

const TabBarIcon = ({ name, focused }) => {
  switch (name) {
    case STACK.TAB_MENU.ORDER_DRAFT:
      return (
        <Ionicons name="ios-people" size={30} color={focused ? colors.mainBlue2 : colors.white} />
      );
    case STACK.TAB_MENU.ORDER_LIST:
      return (
        <Ionicons name="ios-list" size={30} color={focused ? colors.mainBlue2 : colors.white} />
      );
    case STACK.TAB_MENU.ORDER_CANCEL:
      return (
        <Ionicons name="ios-trash" size={30} color={focused ? colors.mainBlue2 : colors.white} />
      );
    case STACK.TAB_MENU.SETTINGS:
      return (
        <Ionicons
          name="md-notifications-outline"
          size={30}
          color={focused ? colors.mainBlue2 : colors.white}
        />
      );
    default:
  }
  return null;
};
TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool,
};
TabBarIcon.defaultProps = {
  name: '',
  focused: false,
};
const CustomTabBar = (propsTabBar) => {
  const {
    activeBackgroundColor,
    activeTintColor,
    inactiveBackgroundColor,
    inactiveTintColor,
    state,
    descriptors,
    navigation,
    ActionBtnRef,
    badgeCount,
  } = propsTabBar;
  return (
    <Container style={styles.row}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (label === STACK.TAB_MENU.ACTION_BUTTON) {
          return (
            <View key={route.key} style={styles.btnContainer}>
              <IconButton
                onPress={() => {
                  ActionBtnRef.current.showContent && ActionBtnRef.current.showContent();
                }}
                name="ios-add-circle"
                size={44}
                color="white"
                iconStyles={styles.btnIcon}
              />
            </View>
          );
        }
        const activeBg = focused ? activeBackgroundColor : inactiveBackgroundColor;
        const activeTin = focused ? activeTintColor : inactiveTintColor;
        return (
          <TouchableWithoutFeedback
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={focused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={[styles.bottomMenuContainer, { backgroundColor: activeBg }]}>
              <TabBarIcon name={route.name} focused={focused} />
              {route.name === STACK.TAB_MENU.NOTIFICATIONS && badgeCount > 0 && (
                <View style={styles.badgeContainer}>
                  <BasedText color={colors.white} size={resFont(10)} weight="500">
                    {badgeCount}
                  </BasedText>
                </View>
              )}
              <BasedText color={activeTin} size={12}>
                {label}
              </BasedText>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </Container>
  );
};

export default memo(CustomTabBar);
