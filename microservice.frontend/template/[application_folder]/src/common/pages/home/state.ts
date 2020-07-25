import { action, observable, flow, isFlowCancellationError } from 'mobx';
import { CancellablePromise } from 'mobx/lib/api/flow';
import { Nullable, ObjectLiteral } from '../../../type';
import { State } from '../../state/state';
import { SubState } from '../../state/type';

export class HomePageState implements SubState {
    @observable ready = false;
    @observable loading = false;
    @observable error: Nullable<Error[]> = null;

    private queries: ObjectLiteral<CancellablePromise<unknown>> = {};

    constructor(private parent: State) {}

    onLoad() {
        if (this.queries.load) {
            this.queries.load.cancel();
            delete this.queries.load;
        }

        this.queries.load = this.startLoading();
        this.queries.load.catch((error) => {
            if (!isFlowCancellationError(error)) {
                console.error(error);
            }
        });
    }

    onUnload() {
        Object.values(this.queries).forEach((query) => query.cancel());
        this.queries = {};
        this.reset();
    }

    @action.bound
    reset(): void {
        this.ready = false;
        this.loading = false;
        this.error = null;
    }

    startLoading = flow(function* startLoading() {
        // @ts-ignore
        const self = this as HomePageState;

        self.loading = true;
        self.error = null;
        self.ready = false;

        yield new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        console.log('Homepage loaded');

        yield self.finishLoading();
    });

    @action.bound
    finishLoading(error?: Error[] | Error): void {
        this.loading = false;

        if (error) {
            if (!Array.isArray(error)) {
                this.error = [error];
            } else {
                this.error = error;
            }
        }

        this.ready = true;
    }
}
