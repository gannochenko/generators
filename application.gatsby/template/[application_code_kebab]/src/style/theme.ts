import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { createTheme } from '@material-ui/core';

import { ThemeType } from './type';
import { makeTokenIndex } from '../util';
import { palette } from './palette';

// https://material-ui.com/customization/default-theme/
// https://material.io/resources/color/#!/?view.left=0&view.right=0

const headerFSBase = '2.4rem';

export const themeDeclaration = {
    palette,
    typography: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        h1: {
            fontSize: `calc(${headerFSBase} * 0.8)`,
            lineHeight: '48px',
            fontWeight: 700,
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
        },
        h2: {
            fontSize: `calc(${headerFSBase} * 0.65)`,
            fontWeight: 600,
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
        },
        h3: {
            fontSize: `calc(${headerFSBase} * 0.5)`,
            fontWeight: 600,
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        h4: {
            fontSize: `calc(${headerFSBase} * 0.5)`,
            fontWeight: 600,
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        h5: {
            fontSize: `calc(${headerFSBase} * 0.5)`,
            fontWeight: 600,
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        h6: {
            fontSize: `calc(${headerFSBase} * 0.5)`,
            fontWeight: 600,
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        body1: {
            fontSize: '1.3rem',
        },
        micro: {
            fontSize: '0.6rem',
        },
    },
    typographyGutter: {
        h1: {
            marginTop: '3rem',
            marginBottom: '1.5rem',
        },
        h2: {
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
        },
        h3: {
            marginTop: '1.5rem',
            marginBottom: '1.2rem',
        },
        h4: {
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        h5: {
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        h6: {
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        body1: {
            marginTop: '1.2rem',
            marginBottom: '1.2rem',
        },
    },
    shape: {
        borderRadius: 1,
    },
    spacing: (value: number) => value * 4,
};

export const theme = createTheme(themeDeclaration) as ThemeType;

theme.tokenIndex = makeTokenIndex(theme);

export const useTheme = () => useContext(ThemeContext);
