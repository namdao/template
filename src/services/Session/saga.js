import { takeLatest } from 'redux-saga/effects';
import { doNothing } from 'utils/utility';
import * as types from './types';

function* checkAutoLogin() {
  yield doNothing;
}

function* watchSession() {
  yield takeLatest(types.CHECK_AUTO_LOGIN, checkAutoLogin);
}

export default watchSession;
