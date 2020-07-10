import * as types from './types';

export const signReducer = (state, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS: {
      return { ...state, ...payload };
    }
    case types.LOGOUT_SUCCESS:
      return { ...state, user: {} };
    case types.SET_DEVICE_TOKEN:
      return { ...state, device_token: payload };
    default:
      return state;
  }
};
