import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
// import { Provider as StateProvider } from "unstated"
import { theme, GlobalStyle, markdownComponents } from '../../style';

export const Root: FunctionComponent<{ element: ReactNode }> = ({
    element,
}) => {
    return (
        <MDXProvider components={markdownComponents}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    {element}
                </>
            </ThemeProvider>
        </MDXProvider>
    );
};
