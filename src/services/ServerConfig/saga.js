import { takeLatest, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

function* setServerBaseUrl(data) {
  yield put(actions.updateServerBaseUrl(data.payload));
}

function* watchServerConfig() {
  yield takeLatest(types.SET_SERVER_CONFIG, setServerBaseUrl);
}

export default watchServerConfig;
