import { Store } from 'redux';

export type SplashParameters = {
    store: Store;
    unsubscribe: () => void;
};
