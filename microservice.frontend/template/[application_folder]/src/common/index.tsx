import React from 'react';
import { Application as ApplicationUI } from './Application';
import { Providers } from './components';

export const Application = () => (
    <Providers>
        <ApplicationUI />
    </Providers>
);
