import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { listOrdersReducer } from 'scenes/OrderList/redux/reducer';

export const initialState = {
  listDraft: [],
  listCancel: [],
  listSale: [],
  listProcessing: [],
  listDone: [],
  listConfirm: [],
  listSearch: [],
  listPrinted: [],
  listStored: [],
  listDesigning: [],
  listFeedbackDesigning: [],
  listDesigned: [],
  listPrinting: [],
  listDeliver: [],
};

export const orderListReducer = (state = initialState, { type, payload }) => {
  let stateReducer = state;
  stateReducer = listOrdersReducer(stateReducer, { type, payload });
  return { ...stateReducer };
};

const persistConfig = {
  key: 'toantam:orderListReducer',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, orderListReducer);
