import React, { FC } from 'react';

import { useNetworkStatusProvider } from './hooks/useNetworkStatus';
import { NetworkStatusContextProvider } from './context';

export const NetworkStatusProvider: FC = ({ children }) => {
    const status = useNetworkStatusProvider();
    return (
        <NetworkStatusContextProvider value={status}>
            {children}
        </NetworkStatusContextProvider>
    );
};
