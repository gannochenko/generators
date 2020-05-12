import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { EventEmitter } from 'events';
import { NotificationContext } from '@gannochenko/ui';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import { ApplicationUI } from './components';
import {
    ServiceManager,
    ServiceManagerContext,
    createHistory,
    dismissOnReady,
} from './lib';
import { createStore } from './store';
import { theme } from './style';

const history = createHistory();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { store, saga, unsubscribe } = createStore({
    history,
    onChange: dismissOnReady,
});
const serviceManager = new ServiceManager();
const emitter = new EventEmitter();

export const Application: FunctionComponent = () => {
    return (
        <ServiceManagerContext.Provider value={serviceManager}>
            <Provider store={store}>
                <NotificationContext.Provider value={emitter}>
                    <MUIThemeProvider theme={theme}>
                        <ThemeProvider theme={theme}>
                            <ApplicationUI
                                history={history}
                                serviceManager={serviceManager}
                            />
                        </ThemeProvider>
                    </MUIThemeProvider>
                </NotificationContext.Provider>
            </Provider>
        </ServiceManagerContext.Provider>
    );
};
