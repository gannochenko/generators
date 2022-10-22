import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SnackbarProvider } from 'notistack';
import { I18nextProvider } from 'react-i18next';

import { theme, GlobalStyle } from '../../style';
import { MDXComponents } from './MDXComponents';
import { StateProviders } from '../../states/providers';
import { NetworkStatusProvider } from '../default';
import { i18n } from '../../i18n/i18n';
import { FC } from '../../type';

const queryClient = new QueryClient();

/**
 * This is a top-level wrapper, it wraps everything else, including the ApplicationLayout.
 */
export const Providers: FC = ({ children }) => {
    return (
        <SimpleReactLightbox>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <QueryClientProvider client={queryClient}>
                        <MDXProvider components={MDXComponents}>
                            <SnackbarProvider maxSnack={3}>
                                <NetworkStatusProvider>
                                    <I18nextProvider i18n={i18n}>
                                        <StateProviders>
                                            {children}
                                        </StateProviders>
                                    </I18nextProvider>
                                </NetworkStatusProvider>
                            </SnackbarProvider>
                        </MDXProvider>
                    </QueryClientProvider>
                </>
            </ThemeProvider>
        </SimpleReactLightbox>
    );
};
