import * as types from './types';

export const updateUserId = (payload) => ({
  type: types.UPDATE_USER_ID,
  payload,
});

export const updateToken = (payload) => ({
  type: types.UPDATE_TOKEN,
  payload,
});

export const updateAuthenticate = (payload) => ({
  type: types.UPDATE_AUTHENTICATED,
  payload,
});

export const clearSession = () => ({
  type: types.CLEAR,
});

export const checkAutoLogin = () => ({
  type: types.CHECK_AUTO_LOGIN,
});

export const logout = () => ({
  type: types.LOG_OUT,
});
