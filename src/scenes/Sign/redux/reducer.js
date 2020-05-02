import * as types from './types';

export const signReducer = (state, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return { ...state, ...payload };
    case types.LOGOUT_SUCCESS:
      return { ...state, user: {} };
    default:
      return state;
  }
};
