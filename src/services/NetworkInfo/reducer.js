import * as types from './types';

const initialState = {
  isConnected: true,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_NETWORK:
      return {
        ...state,
        isConnected: payload,
      };
    default:
      return state;
  }
};
