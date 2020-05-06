import * as types from './types';

export const listOrdersReducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_LIST_ORDER_DRAFT_SUCCESS: {
      const { items = [] } = payload || {};
      return { ...state, listDraft: items };
    }
    default:
      return state;
  }
};
