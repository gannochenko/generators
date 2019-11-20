import { takeLatest, put, call } from 'redux-saga/effects';
import * as reducer from './reducer';

function* load({ payload: { client } }) {
    try {
        const data = {};
        yield put({ type: reducer.LOAD_SUCCESS, payload: { data } });
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

export const homePageSaga = function* watcher() {
    yield takeLatest(reducer.LOAD, load);
};
