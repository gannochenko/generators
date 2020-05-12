import React, { useEffect, FunctionComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import {
    withNotification,
    Notifications,
    Route,
    Switch,
} from '@gannochenko/ui';

import { ApplicationProperties, ApplicationPropertiesAlt } from './type';
import mapDispatchToProps from './dispatch';
import {
    useNetworkMonitor,
    useErrorNotification,
    useNetworkNotification,
} from '../../lib';

import { SHOW_OFFLINE, SHOW_ONLINE } from './reducer';
import { GlobalStyle } from '../../style';

import {
    HomePageRenderer,
    NotFoundPageRenderer,
    ForbiddenPageRenderer,
    Page2Renderer,
    CookiePolicyRenderer,
} from '../../pages';
import { ObjectLiteral } from '../../../type';
import { NotificationUI } from '../NotificationUI';
import { PageProgress } from '../PageProgress';

const ApplicationUIComponent: FunctionComponent<ApplicationProperties> = ({
    ready = false,
    serviceManager,
    history,
    error = null,
    notify = () => {},
    notificationsEventEmitter,
    offline = false,
    dispatch = () => {},
    dispatchLoad = () => {},
}) => {
    useEffect(() => {
        dispatchLoad(serviceManager);
    }, [serviceManager, dispatchLoad]);

    useNetworkMonitor(dispatch, SHOW_ONLINE, SHOW_OFFLINE);
    useErrorNotification(error, notify);
    useNetworkNotification(offline, notify);

    return (
        <>
            <GlobalStyle />
            <Notifications emitter={notificationsEventEmitter}>
                {(props) => <NotificationUI {...props} />}
            </Notifications>
            <PageProgress />
            {ready && (
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" renderer={HomePageRenderer} />
                        <Route exact path="/page2" renderer={Page2Renderer} />
                        <Route
                            exact
                            path="/cookie-policy"
                            renderer={CookiePolicyRenderer}
                        />
                        <Route path="/403" renderer={ForbiddenPageRenderer} />
                        <Route renderer={NotFoundPageRenderer} />
                    </Switch>
                </ConnectedRouter>
            )}
        </>
    );
};

export const ApplicationUI = withNotification<ApplicationPropertiesAlt>(
    connect(
        (store: ObjectLiteral) => store.application,
        mapDispatchToProps,
    )(ApplicationUIComponent),
);
