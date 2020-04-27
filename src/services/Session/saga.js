import { takeLatest, select, delay } from 'redux-saga/effects';
import * as Navigator from 'navigation/Navigator/ConstantNavigator';
import { resetNavigator } from 'navigation/Actions/rootNavigation';
import * as types from './types';
import Selector from './selectors';

function* checkAutoLogin() {
  const state = yield select();
  const token = Selector.getToken(state);
  if (!token) {
    yield delay(1000);
    resetNavigator(Navigator.AUTH_NAVIGATOR);
  }
}

function* watchSession() {
  yield takeLatest(types.CHECK_AUTO_LOGIN, checkAutoLogin);
}

export default watchSession;
