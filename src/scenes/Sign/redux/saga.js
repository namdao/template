import { takeLatest, put, select } from 'redux-saga/effects';
import Logger from 'utils/logger';
import * as actionsSession from 'services/Session/actions';
import * as api from './api';
import * as actions from './actions';
import selectors from './selectors';
import * as types from './types';

function* requestLogin() {
  try {
    const state = yield select();
    const dataForm = selectors.getDataFormLogin(state);
    const response = yield api.login(dataForm);
    yield put(actionsSession.updateToken(response?.token));
    yield put(actions.loginSuccess(response?.user));
  } catch (error) {
    Logger.error(error);
  }
}

function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, requestLogin);
}

export default authSaga;
