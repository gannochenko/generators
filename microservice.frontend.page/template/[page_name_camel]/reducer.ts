import { <%- page_name_pascal %>PageState } from './type';
import { Action } from '../../store/type';

export const LOAD = '<%- page_name_camel %>.load';
export const LOAD_SUCCESS = '<%- page_name_camel %>.load.success';
export const LOAD_FAILURE = '<%- page_name_camel %>.load.failure';
export const UNLOAD = '<%- page_name_camel %>.unload';

export const initialState: <%- page_name_pascal %>PageState = {
    loading: false,
    ready: false,
    error: null,
};

export const <%- page_name_camel %>PageReducer = (
    state: <%- page_name_pascal %>PageState = initialState,
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
