import { takeLatest, put } from 'redux-saga/effects';
import OrderConstants from 'scenes/OrderList/constants/order';
import * as helper from 'scenes/OrderList/helper/utility';
import Logger from 'utils/logger';
import * as types from './types';
import * as api from './api';
import * as actions from './actions';

const { ORDER_STATUS, ORDER_BY, SORT_BY, PER_PAGE } = OrderConstants;

function* getListOrderDraft(payload) {
  try {
    const paramsUri = helper.mergeParamsToUrl(
      ORDER_STATUS.DRAFT,
      ORDER_BY.UPDATED_TIME,
      SORT_BY.DESC,
      PER_PAGE.DEFAULT
    );
    const respones = yield api.getListOrders(paramsUri);
    if (respones) {
      const { callback } = payload || {};
      callback && callback();
      yield put(actions.setListOrderDraftSuccess(respones));
    }
  } catch (error) {
    Logger.error(error);
  }
}

function* orderListSaga() {
  yield takeLatest(types.GET_LIST_ORDER_DRAFT, getListOrderDraft);
}

export default orderListSaga;
