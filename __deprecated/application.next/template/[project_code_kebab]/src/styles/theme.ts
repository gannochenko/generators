import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { meta } from '../meta';

// Default theme structure: https://material-ui.com/customization/default-theme/
// Use this tool to configure custom colors: https://material.io/resources/color/
export const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto',

        // Header
        h4: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: '3rem',
            letterSpacing: 'normal',
        },

        // SubHeader
        h5: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: '2.84rem',
            letterSpacing: 'normal',
        },

        // SectionHeader
        h6: {
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: 'normal',
        },

        // Paragraph
        body1: {
            fontWeight: 'normal',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: 'normal',
        },
    },
    palette: {
        primary: {
            light: '#ffffa8',
            main: meta.theme.color,
            dark: '#cabf45',
        },
        secondary: {
            light: '#ffbd45',
            main: '#fb8c00',
            dark: '#c25e00',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#333',
        },
    },
    shape: {
        borderRadius: 2,
    },
});
