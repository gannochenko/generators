import { useEffect } from 'react';
import { Dispatch } from '../store/type';
import { Error } from './type';
import { Notify } from './ew-internals-ui';
import { Nullable } from '../../type';

export const useNetworkMonitor = (
    dispatch: Dispatch,
    actionOnline: string,
    actionOffline: string,
) => {
    useEffect(() => {
        const onOnline = () => {
            dispatch({ type: actionOnline });
        };
        const onOffline = () => {
            dispatch({ type: actionOffline });
        };

        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, []);
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
    }, [errors]);
};

export const useDispatchUnload = dispatchUnload => {
    useEffect(() => () => dispatchUnload(), []);
};

export const useNetworkNotification = (
    offline: Nullable<boolean>,
    notify: Notify,
) => {
    useEffect(() => {
        if (offline === true) {
            notify({
                text: 'We are trying to fix the connection',
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
    }, [offline]);
};
