import React from 'react';
import { StackActions, TabActions } from '@react-navigation/native';

const navigationRef = React.createRef();

export const navigateScreen = (screen, params = {}) =>
  navigationRef.current?.navigate(screen, params);

export const goBack = () => navigationRef.current.canGoBack() && navigationRef.current.goBack();

export const resetNavigator = () =>
  navigationRef.current.reset({
    index: 1,
    routes: [{ name: 'Details' }],
  });

export const backToTopScreen = () => navigationRef.current.dispatch(StackActions.popToTop());

export const backToOthersScreen = (key) => navigationRef.current.dispatch(StackActions.pop(key));

export const jumpToTab = (screen, params = {}) =>
  navigationRef.current.dispatch(TabActions.jumpTo(screen, params));

export default navigationRef;
