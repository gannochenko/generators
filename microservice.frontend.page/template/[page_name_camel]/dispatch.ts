import { LOAD, UNLOAD } from './reducer';
import { Dispatch } from '../../store/type';
import { ServiceManager } from '../../lib';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchLoad: (serviceManager: ServiceManager) =>
        dispatch({
            type: LOAD,
            payload: {
                serviceManager,
            },
        }),
    dispatchUnload: () =>
        dispatch({
            type: UNLOAD,
            payload: {},
        }),
});
