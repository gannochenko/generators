import { useContext, Context } from 'react';
import { ThemeContext } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { MUIThemeType } from '@gannochenko/ui.emotion';

import { makeTokenIndex } from '../util';
import { palette } from './palette';

// https://material-ui.com/customization/default-theme/

const headerFSBase = '2.4rem';

const makeTheme = (): MUIThemeType => {
    const themeDeclaration = {
        palette,
        typography: {
            fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            h1: {
                fontSize: `calc(${headerFSBase} * 0.8)`,
                lineHeight: '48px',
                fontWeight: 700,
                gutter: {
                    marginTop: '3rem',
                    marginBottom: '1.5rem',
                },
            },
            h2: {
                fontSize: `calc(${headerFSBase} * 0.65)`,
                fontWeight: 600,
                gutter: {
                    marginTop: '1.5rem',
                    marginBottom: '1.5rem',
                },
            },
            h3: {
                fontSize: `calc(${headerFSBase} * 0.5)`,
                fontWeight: 600,
                gutter: {
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },
            },
            h4: {
                fontSize: `calc(${headerFSBase} * 0.5)`,
                fontWeight: 600,
                gutter: {
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },
            },
            h5: {
                fontSize: `calc(${headerFSBase} * 0.5)`,
                fontWeight: 600,
                gutter: {
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },
            },
            h6: {
                fontSize: `calc(${headerFSBase} * 0.5)`,
                fontWeight: 600,
                gutter: {
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },
            },
            body1: {
                fontSize: '1.3rem',
                gutter: {
                    marginTop: '1.2rem',
                    marginBottom: '1.2rem',
                },
            },
            small: {
                fontSize: '0.8rem',
            },
            micro: {
                fontSize: '0.6rem',
            },
        },
        shape: {
            borderRadius: 1,
        },
        spacing: (value: number) => value * 4,
    };

    const muiTheme = createTheme(themeDeclaration);

    // @ts-ignore
    return {
        ...muiTheme,
        // @ts-ignore
        tokenIndex: makeTokenIndex(muiTheme),
    } as MUIThemeType;
};

export const theme = makeTheme();

export const useTheme = () =>
    useContext<MUIThemeType>(ThemeContext as Context<MUIThemeType>);
