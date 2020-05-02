import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { signReducer } from 'scenes/Sign/redux/reducer';

export const initialState = {
  id: null,
  email: '',
  username: '',
  roles: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  let stateReducer = state;
  stateReducer = signReducer(stateReducer, { type, payload });
  return { ...stateReducer };
};

const persistConfig = {
  key: 'template:userReducer',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, userReducer);
