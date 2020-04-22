import { all, fork } from 'redux-saga/effects';
import servicesSaga from 'services/servicesSaga';

export default function* rootSagas() {
  const listRootSaga = [];
  Object.values(servicesSaga).map((saga) => {
    return listRootSaga.push(saga);
  });
  yield all(listRootSaga.map((saga) => fork(saga)));
}
