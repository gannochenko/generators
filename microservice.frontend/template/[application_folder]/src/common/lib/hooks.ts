import { useEffect } from 'react';
import { NotificationContextPropsType } from '@gannochenko/ui';
import {
    DispatchUnload,
    DispatchLoad,
    Dispatch,
    ControllerProperties,
} from '../store/type';
import { Error, Notify } from '../type';
import { Nullable } from '../../type';
import { ServiceManager } from './service-manager';

export const useNetworkMonitor = (
    dispatch: Dispatch,
    actionOnline: string,
    actionOffline: string,
) => {
    useEffect(() => {
        const onOnline = () => {
            dispatch({ type: actionOnline, payload: {} });
        };
        const onOffline = () => {
            dispatch({ type: actionOffline, payload: {} });
        };

        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, [actionOffline, actionOnline, dispatch]);
};

export const useErrorNotification = (
    errors: Nullable<Error[]>,
    notify: Notify,
) => {
    useEffect(() => {
        if (errors) {
            const error = errors.shift();
            if (error) {
                notify({
                    text: error.message,
                    type: 'error',
                    code: 'error',
                });
            }
        }
    }, [errors, notify]);
};

export const useDispatchLoad = (
    dispatchLoad?: DispatchLoad,
    serviceManager?: ServiceManager,
) => {
    useEffect(() => {
        if (dispatchLoad) {
            dispatchLoad(serviceManager);
        }
    }, [dispatchLoad, serviceManager]);
};

export const useDispatchUnload = (dispatchUnload?: DispatchUnload) => {
    useEffect(
        () => () => {
            if (dispatchUnload) {
                dispatchUnload();
            }
        },
        [dispatchUnload],
    );
};

export const useNetworkNotification = (
    offline: Nullable<boolean>,
    notify: Notify,
) => {
    useEffect(() => {
        if (offline === true) {
            notify({
                text: 'We are offline :(',
                icon: 'cloud_off',
                code: 'connection_error',
                closeable: false,
            });
        } else if (offline === false) {
            notify({
                text: 'We are back on-line!',
                icon: 'cloud_queue',
                code: 'connection_error',
                closeable: true,
                lifeTime: 3000,
            });
        }
    }, [notify, offline]);
};

export const useScrollTop = () =>
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

export const usePage = ({
    dispatchLoad,
    dispatchUnload,
    serviceManager,
    notify,
    error,
}: ControllerProperties & NotificationContextPropsType) => {
    useDispatchLoad(dispatchLoad, serviceManager);
    useDispatchUnload(dispatchUnload);
    useErrorNotification(error, notify);
    useScrollTop();
};
