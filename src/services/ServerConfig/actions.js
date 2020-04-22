import * as types from './types';

export const updateServerBaseUrl = (payload) => ({
  type: types.UPDATE_SERVER_BASE_URL,
  payload,
});

export const clearServerBaseUrl = () => ({
  type: types.CLEAR_SERVER_BASE_URL,
});

export const setServerBaseUrl = (payload) => ({
  type: types.SET_SERVER_CONFIG,
  payload,
});
