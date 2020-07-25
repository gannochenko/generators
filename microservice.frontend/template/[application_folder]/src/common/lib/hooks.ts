import { useEffect } from 'react';
import { Notify } from '../type';
import { Nullable } from '../../type';
import { State } from '../state/state';

export const useErrorNotification = (
    errors: Nullable<Error[]>,
    notify: Notify,
) => {
    useEffect(() => {
        if (errors) {
            errors.forEach((error) =>
                notify({
                    text: error.message,
                    type: 'error',
                    code: error.name,
                }),
            );
        }
    }, [errors, notify]);
};

export const useNetworkMonitor = (state: State) => {
    useEffect(() => {
        const onOnline = () => {
            state.setOfflineStatus(false);
        };
        const onOffline = () => {
            state.setOfflineStatus(true);
        };

        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, [state]);
};

export const useNetworkNotification = (
    offline: Nullable<boolean>,
    notify: Notify,
) =>
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

export const useScrollTop = () =>
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

export const useCurrentPageName = (state: State, pageName: string) =>
    useEffect(() => {
        state.setPageName(pageName);
    }, [state, pageName]);
