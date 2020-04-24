import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import * as types from './types';

const initialState = {
  baseUrl: null,
};

export const serverConfigReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
  key: 'template:serverConfig',
  storage: AsyncStorage,
  whitelist: ['baseUrl'],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, serverConfigReducer);
