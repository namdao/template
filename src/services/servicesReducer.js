import { combineReducers } from 'redux';
import { reducer as serverConfigReducer } from './ServerConfig/reducer';

const reducer = combineReducers({
  serverConfig: serverConfigReducer,
});

export default reducer;
