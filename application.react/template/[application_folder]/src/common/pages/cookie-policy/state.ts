import { action, observable } from 'mobx';
import { State } from '../../state/state';
import { SubState } from '../../state/type';
import { Nullable } from '../../../type';

export class CookiePolicyPageState implements SubState {
    @observable ready = true;
    @observable loading = false;
    @observable error: Nullable<Error[]> = null;

    constructor(private parent: State) {}

    @action.bound
    reset() {
        this.ready = false;
        this.loading = false;
    }
}
