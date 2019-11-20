import { takeLatest, put, call } from 'redux-saga/effects';
import * as reducer from './reducer';

function* load({ payload: { client } }) {
    try {
        const user = {};
        yield put({ type: reducer.LOAD_SUCCESS, payload: { user } });
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

export const applicationSaga = function* watcher() {
    // @ts-ignore
    yield takeLatest(reducer.LOAD, load);
};
