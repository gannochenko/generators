import { useEffect, useState } from 'react';
import { NetworkStatusContextValueType } from '../type';

export const useNetworkStatusProvider = () => {
    // @ts-ignore
    const [status, setState] = useState<NetworkStatusContextValueType>({
        online: true,
        setOnline: (isOnline: boolean) =>
            setState({
                ...status,
                online: isOnline,
            } as NetworkStatusContextValueType),
    });

    useEffect(() => {
        const onOnline = () => {
            status.setOnline(true);
        };
        const onOffline = () => {
            status.setOnline(false);
        };

        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, [status]);

    return status as NetworkStatusContextValueType;
};
