import AsyncStorage from '@react-native-community/async-storage';
import { autoMergeLevel2, persistReducer } from 'redux-persist';
import appReducer from './appReducer';

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [],
  stateReconciler: autoMergeLevel2,
  timeout: null,
};

export default persistReducer(persistConfig, appReducer);
