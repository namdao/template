import Logger from './logger';

// import TrackingManager from 'utils/trackingManager';
// import BugSnagManager from 'utils/bugsnagManager';

/**
 * Get Current Router Name
 * @param {*} navigationState
 */
export const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};

/**
 * Screen Tracking
 */
export const screenTracking = (navigationState, routeNameRef) => {
  const previousRouteName = routeNameRef.current;
  const currentRouteName = getActiveRouteName(navigationState);
  if (previousRouteName !== currentRouteName) {
    Logger.log(`###########SCREEN_NAME######### ${currentRouteName}`);
    // do something tracking when current screen;
  }
  return currentRouteName;
};
