import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import * as types from './types';

const initialState = {
  token: '',
};

export const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_TOKEN:
      return { ...state, token: payload };
    case types.CLEAR:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'template:session',
  storage: AsyncStorage,
  whitelist: ['token'],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, sessionReducer);
