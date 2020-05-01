// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { getActiveRouteName, screenTracking } from 'utils/screenTracking';
import storeConfig from 'storeConfig';
import AppKeeper from 'manager/appKeeper';
import CommonService from 'manager/commonService';
import VersionManager from 'manager/checkVersionService';
import AppStateManager from 'manager/appStateHandler';
import Splash from 'scenes/Splash';
import RootNavigation from 'navigation/Actions/rootNavigation';
import RootNavigator from 'navigation/Navigator';

enableScreens();

const App = () => {
  const routeNameRef = useRef();

  React.useEffect(() => {
    const state = RootNavigation?.current?.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <>
      <Provider store={storeConfig.rootStore}>
        <PersistGate loading={<Splash />} persistor={storeConfig.persistor}>
          <AppKeeper>
            <SafeAreaProvider>
              <NavigationContainer
                ref={RootNavigation}
                onStateChange={(state) => {
                  routeNameRef.current = screenTracking(state, routeNameRef);
                }}
              >
                <RootNavigator />
                <AppStateManager />
                <CommonService />
                <VersionManager />
              </NavigationContainer>
            </SafeAreaProvider>
          </AppKeeper>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
