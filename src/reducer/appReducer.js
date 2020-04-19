import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import { reducer as navReducer } from 'navigation/reducers';
// import { reducer as dataReducer } from 'data';
// import { reducer as servicesReducer } from 'services/reducer';

/**
 * Root Reducer
 */
const initialState = {
  data: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_ALL_STATE': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  //   form: formReducer,
  // nav: navReducer,
  homeReducer,
  // services: servicesReducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};
export default appReducer;
