import { CookiePolicyPageState } from './type';
import { Action } from '../../store/type';

export const LOAD = 'cookiePolicy.load';
export const LOAD_SUCCESS = 'cookiePolicy.load.success';
export const LOAD_FAILURE = 'cookiePolicy.load.failure';
export const UNLOAD = 'cookiePolicy.unload';

export const initialState: CookiePolicyPageState = {
    loading: false,
    ready: false,
    error: null,
};

export const cookiePolicyPageReducer = (
    state: CookiePolicyPageState = initialState,
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
