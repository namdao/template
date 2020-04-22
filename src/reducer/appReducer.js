import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import { reducer as navReducer } from 'navigation/reducers';
// import { reducer as dataReducer } from 'data';
import servicesReducer from 'services/servicesReducer';

const rootReducer = combineReducers({
  //   form: formReducer,
  // nav: navReducer,
  services: servicesReducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};
export default appReducer;
