import { combineReducers } from 'redux';
import servicesReducer from 'services/servicesReducer';
import dataReducer from './data';

const rootReducer = combineReducers({
  services: servicesReducer,
  data: dataReducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};
export default appReducer;
