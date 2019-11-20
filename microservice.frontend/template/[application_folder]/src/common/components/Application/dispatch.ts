import { LOAD } from './reducer';
import { Dispatch } from '../../store/type';

export default (dispatch: Dispatch) => ({
    dispatch,
    dispatchLoad: client =>
        dispatch({
            type: LOAD,
            payload: {
                client,
            },
        }),
});
