import React, { FunctionComponent } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { EventEmitter } from 'events';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from '@gannochenko/ui';

import { State } from '../../state/state';
import { StateProvider } from '../../state/context';
import { theme } from '../../style';

const emitter = new EventEmitter();
const state = new State();

if (__DEV__) {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    window.__state = state;
}

export const Providers: FunctionComponent = ({ children }) => (
    <StateProvider value={state}>
        <NotificationProvider value={emitter}>
            <MUIThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>{children}</BrowserRouter>
                </ThemeProvider>
            </MUIThemeProvider>
        </NotificationProvider>
    </StateProvider>
);
