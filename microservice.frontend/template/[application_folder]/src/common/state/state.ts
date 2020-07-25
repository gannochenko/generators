import { observable, computed, configure, action } from 'mobx';
import { Nullable, ObjectLiteral } from '../../type';
import { ServiceManager } from '../lib';
import { HomePageState } from '../pages/home';
import { SubState } from './type';
import { CookiePolicyPageState } from '../pages/cookie-policy/state';

configure({ enforceActions: 'observed', computedRequiresReaction: true });

export class State {
    @observable ready = false;
    @observable loading = false;
    @observable error: Nullable<Error[]> = null;
    @observable offline: Nullable<boolean> = null;
    @observable pageName: Nullable<string> = null;

    // page states
    @observable public homePage = new HomePageState(this);
    @observable public cookiePolicyPage = new CookiePolicyPageState(this);

    public serviceManager = new ServiceManager();

    private pageStatesIndex: Nullable<ObjectLiteral<SubState>> = null;

    @action.bound
    async startLoading() {
        this.ready = false;
        this.loading = true;
        this.error = null;

        // load current user, feature flags, something else

        this.finishLoading();
    }

    @action.bound
    finishLoading(error?: Error[] | Error) {
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

    @action.bound
    setOfflineStatus(offline: boolean) {
        this.offline = offline;
    }

    @action.bound
    setPageName(pageName: string) {
        this.pageName = pageName;
    }

    @computed get applicationLoading(): boolean {
        if (this.loading) {
            return true;
        }

        return !!Object.values(this.getPageStates()).find(
            (state) => state.loading,
        );
    }

    @computed get applicationReady(): boolean {
        if (!this.ready || !this.pageName) {
            return false;
        }

        const stateName = `${this.pageName}Page`;
        if (!(stateName in this)) {
            return true;
        }

        // @ts-ignore
        return (this[stateName] as State).ready;
    }

    private getPageStates() {
        if (!this.pageStatesIndex) {
            this.pageStatesIndex = {};

            Object.keys(this).forEach((key) => {
                if (key.endsWith('Page')) {
                    // @ts-ignore
                    this.pageStatesIndex![key] = (this[
                        key
                    ] as unknown) as SubState;
                }
            });
        }

        return this.pageStatesIndex;
    }
}
