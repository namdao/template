import { takeLatest, select, put, delay } from 'redux-saga/effects';
import { navigateScreen } from 'navigation/Actions/rootNavigation';
import { AUTH_NAVIGATOR } from 'navigation/Navigator/ConstantNavigator';
import * as types from './types';
import * as actions from './actions';
import Selector from './selectors';

function* checkAutoLogin() {
  const state = yield select();
  const token = Selector.getToken(state);
  if (!token) {
    yield put(actions.updateAuthenticate(false));
    // delay 0.1s to NavigationRef is mounted.
    yield delay(100);
    navigateScreen(AUTH_NAVIGATOR);
    return;
  }
  yield put(actions.updateAuthenticate(true));
  // update Role for another tab
}

function* watchSession() {
  yield takeLatest(types.CHECK_AUTO_LOGIN, checkAutoLogin);
}

export default watchSession;
