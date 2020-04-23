/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import { getActiveRouteName, screenTracking } from 'utils/screenTracking';
import storeConfig from 'storeConfig';
import AppKeeper from 'manager/appKeeper';
import Splash from 'scenes/Splash';
import RootNavigator from 'navigation/Navigator';

enableScreens();

const App = () => {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  React.useEffect(() => {
    const state = navigationRef?.current?.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <>
      <Provider store={storeConfig.rootStore}>
        <PersistGate loading={<Splash />} persistor={storeConfig.persistor}>
          <AppKeeper>
            <NavigationContainer
              ref={navigationRef}
              onStateChange={(state) => {
                routeNameRef.current = screenTracking(state, routeNameRef);
              }}
            >
              <RootNavigator />
            </NavigationContainer>
          </AppKeeper>
        </PersistGate>
      </Provider>
    </>
  );
};
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
};
const MyApp = codePush(codePushOptions)(App);

export default MyApp;
