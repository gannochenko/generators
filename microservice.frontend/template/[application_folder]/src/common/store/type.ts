import { Notify } from '@bucket-of-bolts/ui';
import { Error, Route } from '../lib/type';
import { Client } from '../lib';
import { Nullable, ObjectLiteral } from '../../type';

export interface PageState {
    loading: boolean;
    ready: boolean;
    error: Nullable<Error[]>;
}

export interface Action {
    type: string;
    payload?: object;
}

export interface ControllerProperties {
    ready: boolean;
    client: Client;
    theme: ObjectLiteral;
    error: Nullable<Error[]>;
    dispatch?: (action: Action) => void;
    dispatchLoad?: DispatchLoad;
    dispatchUnload?: DispatchUnload;
    notify: Notify;
}

export interface PageProperties extends ControllerProperties {
    route: Route;
}

export type Dispatch = (action: Action) => void;

export type DispatchLoad = (
    client: Nullable<Client>,
    parameters?: Nullable<object>,
) => void;

export type DispatchUnload = () => void;
