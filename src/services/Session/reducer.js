import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import * as types from './types';

const initialState = {
  token: '',
  deviceToken: '',
};

export const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RESET_ALL_STATE':
      return initialState;
    case types.UPDATE_TOKEN:
      return { ...state, token: payload };
    case types.SET_DEVICE_TOKEN:
      return { ...state, deviceToken: payload };
    case types.CLEAR:
      return {
        ...state,
        token: '',
        deviceToken: '',
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'toantam:session',
  storage: AsyncStorage,
  whitelist: ['token', 'deviceToken'],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, sessionReducer);
