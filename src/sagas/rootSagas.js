import { all, fork } from 'redux-saga/effects';
import servicesSaga from 'services/servicesSaga';
import appSaga from './appSagas';

export default function* rootSagas() {
  const listRootSaga = [];
  Object.values(servicesSaga).map((saga) => {
    return listRootSaga.push(saga);
  });
  Object.values(appSaga).map((saga) => {
    return listRootSaga.push(saga);
  });
  yield all(listRootSaga.map((saga) => fork(saga)));
}
