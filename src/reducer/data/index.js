import { combineReducers } from 'redux';
import { reducer as UserReducer } from './userReducer';
import { reducer as OrderListReducer } from './orderListReducer';

export default combineReducers({
  user: UserReducer,
  orderList: OrderListReducer,
});
