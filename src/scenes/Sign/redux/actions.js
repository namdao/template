import * as types from './types';

export const requestLogin = (payload) => ({
  type: types.REQUEST_LOGIN,
  payload,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});
