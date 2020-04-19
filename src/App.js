/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storeConfig from 'storeConfig';
import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import { getActiveRouteName, screenTracking } from 'utils/screenTracking';
import Splash from 'scenes/Splash';

const App = () => {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  React.useEffect(() => {
    const state = navigationRef.current.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <>
      <Provider store={storeConfig.rootStore}>
        <PersistGate loading={<Splash />} persistor={storeConfig.persistor} />
        <NavigationContainer
          ref={navigationRef}
          onStateChange={(state) => {
            routeNameRef.current = screenTracking(state, routeNameRef);
          }}
        />
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
