import { createStore, compose, applyMiddleware } from 'redux';
import rootSaga from 'sagas/rootSagas';
import rootReducer from 'reducer/rootReducer';
// List Middelware
import sagaMiddleWare from 'sagas/middleware';

const listMiddleWare = [];
listMiddleWare.push(sagaMiddleWare);
// listMiddleWare.push(screenMiddleWare);

const enhancer = compose(applyMiddleware(...listMiddleWare));
const store = createStore(rootReducer, enhancer);
sagaMiddleWare.run(rootSaga);

export default store;
