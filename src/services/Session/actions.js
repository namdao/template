import * as types from './types';

export const updateUserId = (payload) => ({
  type: types.UPDATE_USER_ID,
  payload,
});

export const updateToken = (payload) => ({
  type: types.UPDATE_TOKEN,
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
export const setDeviceToken = (payload) => ({
  type: types.SET_DEVICE_TOKEN,
  payload,
});

export const resetAllApp = () => ({
  type: 'RESET_ALL_STATE',
});
