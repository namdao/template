import { takeLatest, select, put, delay } from 'redux-saga/effects';
import { navigateScreen } from 'navigation/Actions/rootNavigation';
import { AUTH_NAVIGATOR } from 'navigation/Navigator/ConstantNavigator';
import * as signActions from 'scenes/Sign/redux/actions';
import * as types from './types';
import * as api from './api';
import Selector from './selectors';

function* checkAutoLogin() {
  const state = yield select();
  const token = Selector.getToken(state);
  if (!token) {
    yield delay(100);
    navigateScreen(AUTH_NAVIGATOR);
    return;
  }
  const response = yield api.getMe(token);
  yield put(signActions.loginSuccess(response?.user));
}

function* watchSession() {
  yield takeLatest(types.CHECK_AUTO_LOGIN, checkAutoLogin);
}

export default watchSession;
