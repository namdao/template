import { combineReducers } from 'redux';
import { reducer as serverConfigReducer } from './ServerConfig/reducer';
import { reducer as appStateReducer } from './AppState/reducer';
import { reducer as sessionReducer } from './Session/reducer';
import { reducer as networkInfoReducer } from './NetworkInfo/reducer';
import { reducer as globalReducer } from './GlobalModal/reducer';

const reducer = combineReducers({
  serverConfig: serverConfigReducer,
  appState: appStateReducer,
  session: sessionReducer,
  networkInfo: networkInfoReducer,
  globalModal: globalReducer,
  // language: languageReducer,
  // globalModal: globalModalReducer,
  // loadingInfo: loadingInfoReducer,
});

export default reducer;
