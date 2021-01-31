import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
// import { createContainer } from 'unstated-next'; // https://github.com/jamiebuilds/unstated-next

import { theme, GlobalStyle } from '../../style';
import { markdownComponents } from './markdown-components';

export const Providers: FunctionComponent<{ element: ReactNode }> = ({
    element,
}) => {
    return (
        <MDXProvider components={markdownComponents}>
            <MUIThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        {element}
                    </>
                </ThemeProvider>
            </MUIThemeProvider>
        </MDXProvider>
    );
};
