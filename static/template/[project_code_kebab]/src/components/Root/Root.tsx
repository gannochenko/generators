import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
<% if (use_mui) { %>
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
<% } %>
import { ThemeProvider } from 'styled-components';
// import { Provider as StateProvider } from "unstated"
import { theme, GlobalStyle, markdownComponents<% if (use_mui) { %>, MUITheme<% } %> } from '../../style';

export const Root: FunctionComponent<{ element: ReactNode }> = ({
    element,
}) => {
    return (
        <MDXProvider components={markdownComponents}>
<% if (use_mui) { %>
            <MUIThemeProvider theme={MUITheme}>
<% } %>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        {element}
                    </>
                </ThemeProvider>
<% if (use_mui) { %>
            </MUIThemeProvider>
<% } %>
        </MDXProvider>
    );
};
