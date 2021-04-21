import { ReactNode } from 'react';

export type StoreObserverChildPropsType = {
    shown: boolean;
    progress: number;
    fading: boolean;
};

export type PageLoadProgressPropsType = {
    loading: boolean;
    children: (props: StoreObserverChildPropsType) => ReactNode;
    observeGlobalLock?: boolean;
    debounceTolerance?: number;
    fadeTimeout?: number;
    maximumStepDuration?: number;
    stepCount?: number;
};

export type State = {
    shown: boolean;
    progress: number;
    fading: boolean;
    loading: boolean;
};
