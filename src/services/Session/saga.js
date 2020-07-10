import { takeLatest, select, put, delay } from 'redux-saga/effects';
import { navigateScreen } from 'navigation/Actions/rootNavigation';
import { STACK } from 'navigation/Navigator/ConstantNavigator';
import * as signActions from 'scenes/Sign/redux/actions';
import Crashlytics from 'services/Crashlytics';
import Logger from 'utils/logger';
import * as types from './types';
import * as api from './api';
import * as actions from './actions';
import Selector from './selectors';

function* checkAutoLogin() {
  const state = yield select();
  const token = Selector.getToken(state);
  try {
    if (!token) {
      yield delay(100);
      navigateScreen(STACK.AUTH_NAVIGATOR);
      return;
    }
    const response = yield api.getMe();
    Crashlytics.getInstance().setInitUser(response?.user);
    if (response) {
      yield put(signActions.loginSuccess(response?.user));
    }
  } catch (error) {
    Logger.error(error);
    navigateScreen(STACK.AUTH_NAVIGATOR);
  }
}

function* logout() {
  try {
    const response = yield api.logout();
    if (response) {
      yield put(actions.resetAllApp());
    }
  } catch (error) {
    Logger.error(error);
  }
}

function* watchSession() {
  yield takeLatest(types.CHECK_AUTO_LOGIN, checkAutoLogin);
  yield takeLatest(types.LOG_OUT, logout);
}

export default watchSession;
