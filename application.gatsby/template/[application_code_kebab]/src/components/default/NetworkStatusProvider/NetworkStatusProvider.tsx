import React from 'react';

import { useNetworkStatusProvider } from './hooks/useNetworkStatus';
import { NetworkStatusContextProvider } from './context';
import { FC } from '../../../type';

export const NetworkStatusProvider: FC = ({ children }) => {
    const status = useNetworkStatusProvider();
    return (
        <NetworkStatusContextProvider value={status}>
            {children}
        </NetworkStatusContextProvider>
    );
};
