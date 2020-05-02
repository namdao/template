import { all, fork } from 'redux-saga/effects';
import servicesSaga from 'services/servicesSaga';
import authSaga from 'scenes/Sign/redux/saga';

export default function* rootSagas() {
  const listRootSaga = [];
  Object.values(servicesSaga).map((saga) => {
    return listRootSaga.push(saga);
  });
  listRootSaga.push(authSaga);
  yield all(listRootSaga.map((saga) => fork(saga)));
}
