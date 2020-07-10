import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import Platform from 'utils/platform';
import * as types from './types';

const initialState = {
  baseUrl: null,
};

export const serverConfigReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RESET_ALL_STATE': {
      if (Platform.isProduction) {
        return state;
      }
      return initialState;
    }
    case types.UPDATE_SERVER_BASE_URL:
      return {
        ...state,
        baseUrl: payload,
      };
    case types.CLEAR_SERVER_BASE_URL:
      return {
        ...state,
        baseUrl: null,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'toantam:serverConfig',
  storage: AsyncStorage,
  whitelist: ['baseUrl'],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, serverConfigReducer);
