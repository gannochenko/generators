import { LOAD } from './reducer';
import { Dispatch } from '../../store/type';
import { ServiceManager } from '../../lib';

export default (dispatch: Dispatch) => ({
    dispatch,
    dispatchLoad: (serviceManager: ServiceManager) =>
        dispatch({
            type: LOAD,
            payload: {
                serviceManager,
            },
        }),
});
