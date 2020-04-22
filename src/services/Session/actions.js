import * as types from './types';

export const updateUserId = (payload) => ({
  type: types.UPDATE_USER_ID,
  payload,
});

export const updateToken = (payload) => ({
  type: types.UPDATE_TOKEN,
  payload,
});

/**
 * Clear session
 */
export const clearSession = () => ({
  type: types.CLEAR,
});
