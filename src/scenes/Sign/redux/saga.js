import { takeLatest, put, select } from 'redux-saga/effects';
import Logger from 'utils/logger';
import * as actionsSession from 'services/Session/actions';
import SessionSelector from 'services/Session/selectors';
import CrashlyticsManager from 'services/Crashlytics';
import * as api from './api';
import * as actions from './actions';
import * as types from './types';

function* requestLogin({ payload }) {
  const { values, actions: actionForms } = payload || {};
  try {
    const state = yield select();
    const deviceToken = SessionSelector.getDeviceToken(state);
    values.device_token = deviceToken;
    const response = yield api.login(values);
    if (response) {
      yield put(actionsSession.updateToken(response.token));
      yield put(actions.loginSuccess(response?.user));
      CrashlyticsManager.getInstance().setInitUser(response?.user);
      actionForms.setSubmitting(false);
    }
  } catch (error) {
    actionForms.setSubmitting(false);
    Logger.error(error);
  }
}

function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, requestLogin);
}

export default authSaga;
