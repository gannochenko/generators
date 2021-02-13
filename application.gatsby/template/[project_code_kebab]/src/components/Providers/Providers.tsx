import React, { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0Provider } from '@auth0/auth0-react';

import { theme, GlobalStyle } from '../../style';
import { markdownComponents } from './markdown-components';
import { isDev } from '../../util/isDev';

const queryClient = new QueryClient();

export const Providers: FC = ({ children }) => {
    return (
        <MUIThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Auth0Provider
                        domain={`${process.env.AUTH0_DOMAIN}.auth0.com`}
                        clientId={process.env.AUTH0_CLIENT_ID!}
                        redirectUri={
                            typeof window !== 'undefined'
                                ? window.location.origin
                                : ''
                        }
                        // audience={`https://${process.env.AUTH0_DOMAIN}.auth0.com/api/v2/`}
                        audience={`http://localhost:3000`}
                        scope="read:current_user update:current_user_metadata"
                        cacheLocation={isDev() ? 'localstorage' : undefined}
                        useRefreshTokens={false}
                    >
                        <QueryClientProvider client={queryClient}>
                            <MDXProvider components={markdownComponents}>
                                {children}
                            </MDXProvider>
                        </QueryClientProvider>
                    </Auth0Provider>
                </>
            </ThemeProvider>
        </MUIThemeProvider>
    );
};
