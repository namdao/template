import * as types from './types';
import GlobalModalSeletor from './selectors';

/**
 * @param {String} modalName
 * @param {Object} modalProps
 */
export const showModal = (payload) => ({
  type: types.SHOW_MODAL,
  payload,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});

export const clearModal = () => ({
  type: types.CLEAR_MODAL,
});
export const showLoadingModal = () =>
  showModal({
    modalName: types.LOADING_MODAL,
    type: types.TYPE_SHOW.MODAL,
  });
/**
 * @param {Object} modalProps
 */
export const setModalProps = (modalName, modalProps) => async (dispatch, getState) => {
  const currentModalName = GlobalModalSeletor.getModalName(getState());
  if (currentModalName !== modalName) return;

  dispatch({
    type: types.SET_MODAL_PROPS,
    payload: modalProps,
  });
};
