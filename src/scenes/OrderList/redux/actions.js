import * as types from './types';

export const getListOrderDraft = (payload) => ({
  type: types.GET_LIST_ORDER_DRAFT,
  ...payload,
});
export const setListOrderDraftSuccess = (payload) => ({
  type: types.SET_LIST_ORDER_DRAFT_SUCCESS,
  payload,
});
