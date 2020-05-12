import { Page2State } from './type';
import { Action } from '../../store/type';

export const LOAD = 'page2.load';
export const LOAD_SUCCESS = 'page2.load.success';
export const LOAD_FAILURE = 'page2.load.failure';
export const UNLOAD = 'page2.unload';

export const initialState: Page2State = {
    loading: false,
    ready: false,
    error: null,
};

export const page2Reducer = (
    state: Page2State = initialState,
    action: Action,
) => {
    switch (action.type) {
        case LOAD:
            return { ...state, loading: true };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                ready: true,
                error: null,
                ...action.payload,
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                ready: true,
                error: action.payload,
            };
        case UNLOAD:
            return { ...initialState };
        default:
            return state;
    }
};
