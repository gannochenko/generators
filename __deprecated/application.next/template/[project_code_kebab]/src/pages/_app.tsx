import { useEffect } from 'react';
import { AppType } from 'next/dist/next-server/lib/utils';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Application: AppType = ({ Component, pageProps }) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    // @ts-ignore
    const { renderLayout } = Component;

    return (
        <StylesProvider injectFirst>
            <StyledComponentThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    {renderLayout(<Component {...pageProps} />)}
                </ThemeProvider>
            </StyledComponentThemeProvider>
        </StylesProvider>
    );
};

export default Application;
