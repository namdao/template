import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import * as types from './types';

const initialState = {
  userId: '',
  token: '',
};

export const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_USER_ID:
      return { ...state, userId: payload };
    case types.UPDATE_TOKEN:
      return { ...state, token: payload };
    case types.CLEAR:
      return {
        ...state,
        userId: '',
        token: '',
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'template:session',
  storage: AsyncStorage,
  whitelist: ['userId', 'token'],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, sessionReducer);
