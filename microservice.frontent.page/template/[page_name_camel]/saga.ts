import { takeLatest, put, call } from 'redux-saga/effects';
import * as reducer from './reducer';
import { LoadAction } from '../../store/type';
import { SampleService } from '../../services/sample';

function* load(action: LoadAction) {
    if (!action) {
        return;
    }
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        payload: { serviceManager },
    } = action;

    const service = serviceManager.getService('sample') as SampleService;

    try {
        const result = yield call(() => service.doSomething());
        if (result.errors.length) {
            const error = result.errors[0];
            yield put({ type: reducer.LOAD_FAILURE, payload: error });
            if (__DEV__) {
                console.error(error);
            }
        } else {
            yield put({ type: reducer.LOAD_SUCCESS, payload: { data: result.data } });
        }
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

export const <%- page_name_camel %>PageSaga = function* watcher() {
    yield takeLatest(reducer.LOAD, load);
};
