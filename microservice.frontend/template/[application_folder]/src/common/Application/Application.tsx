import React, { useEffect, FunctionComponent } from 'react';
import { observer } from 'mobx-react';
import {
    Notifications,
    Route,
    Switch,
    useNotification,
    useNotificationEventEmitter,
} from '@gannochenko/ui';

import { ApplicationProps } from './type';
import {
    useErrorNotification,
    useNetworkMonitor,
    useNetworkNotification,
} from '../lib';
import { GlobalStyle } from '../style';

import {
    HomePageRenderer,
    NotFoundPageRenderer,
    ForbiddenPageRenderer,
    CookiePolicyRenderer,
} from '../pages';

import { NotificationUI, PageProgress } from '../components';
import { StatePropsType, useGlobalState } from '../state/context';
import { SplashScreen } from '../components/SplashScreen';

const Routes = observer(({ state }: StatePropsType) => {
    if (!state.ready) {
        return null;
    }

    return (
        <Switch>
            <Route exact path="/" renderer={HomePageRenderer} />
            <Route path="/cookie-policy" renderer={CookiePolicyRenderer} />
            <Route path="/403" renderer={ForbiddenPageRenderer} />
            <Route renderer={NotFoundPageRenderer} />
        </Switch>
    );
});

const Notifier = observer(({ state }: StatePropsType) => {
    const notify = useNotification();
    useNetworkNotification(state.offline, notify);
    useErrorNotification(state.error, notify);

    return null;
});

export const Application: FunctionComponent<ApplicationProps> = () => {
    const state = useGlobalState()!;
    const notificationEventEmitter = useNotificationEventEmitter()!;

    useEffect(() => {
        state.startLoading();
    }, [state]);
    useNetworkMonitor(state);

    return (
        <>
            <GlobalStyle />
            <Notifications emitter={notificationEventEmitter}>
                {(notificationProps) => (
                    <NotificationUI {...notificationProps} />
                )}
            </Notifications>
            <Notifier state={state} />
            <PageProgress state={state} />
            <SplashScreen state={state} />
            <Routes state={state} />
        </>
    );
};
