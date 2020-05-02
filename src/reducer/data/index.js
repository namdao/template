import { combineReducers } from 'redux';
import { reducer as UserReducer } from './userReducer';

export default combineReducers({
  user: UserReducer,
});
