import { takeLatest, put } from 'redux-saga/effects';
import * as reducer from './reducer';
import { LoadAction } from '../../store/type';

const delay = () => new Promise((res) => setTimeout(res, 2000));

function* load(action: LoadAction) {
    if (!action) {
        return;
    }
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        payload: { serviceManager },
    } = action;

    try {
        const data = {};
        yield delay();
        yield put({ type: reducer.LOAD_SUCCESS, payload: { data } });
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

export const page2Saga = function* watcher() {
    yield takeLatest(reducer.LOAD, load);
};
