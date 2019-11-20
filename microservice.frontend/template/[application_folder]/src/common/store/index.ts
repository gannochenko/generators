import { applyMiddleware, compose, createStore as createRawStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import logger from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

export const createStore = ({ history, onChange }) => {
    const saga = createSagaMiddleware();
    const middleware = [routerMiddleware(history), saga];
    if (__DEV__) {
        middleware.push(logger);
    }
    const store = createRawStore(
        combineReducers({
            router: connectRouter(history),
            ...reducers,
        }),
        {},
        compose(applyMiddleware(...middleware)),
    );
    saga.run(function* rootSaga() {
        yield all(sagas.map(sagaItem => fork(sagaItem)));
    });

    let unsubscribe = null;
    if (typeof onChange === 'function') {
        unsubscribe = store.subscribe(() => {
            onChange({ store, unsubscribe });
        });
    }

    return { store, saga, unsubscribe };
};
