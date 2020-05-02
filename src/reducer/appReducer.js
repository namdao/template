import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import servicesReducer from 'services/servicesReducer';
import dataReducer from './data';

const rootReducer = combineReducers({
  form: formReducer,
  services: servicesReducer,
  data: dataReducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};
export default appReducer;
