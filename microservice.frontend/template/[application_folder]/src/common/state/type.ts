import { Nullable } from '../../type';

export interface SubState {
    loading: boolean;
    ready: boolean;
    error: Nullable<Error[]>;
}
