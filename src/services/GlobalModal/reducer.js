import * as types from './types';

const initialState = {
  isVisible: false,
  modalName: '',
  modalProps: null,
  type: types.TYPE_SHOW.BOTTOM,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        modalName: action?.payload?.modalName,
        modalProps: action?.payload?.modalProps,
        type: action?.payload?.type,
      };
    case types.SET_MODAL_PROPS:
      return {
        ...state,
        modalProps: {
          ...state?.modalProps,
          ...action?.payload,
        },
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        isVisible: false,
        type: types.TYPE_SHOW.BOTTOM,
      };
    case types.CLEAR_MODAL:
      return initialState;
    default:
      return state;
  }
};
