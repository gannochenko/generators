import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { meta } from '../meta';

// Default theme structure: https://material-ui.com/customization/default-theme/
// Use this tool to configure custom colors: https://material.io/resources/color/
export const theme = createMuiTheme({
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
    },
    shape: {
        borderRadius: 2,
    },
});
