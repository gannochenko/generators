import { createGlobalStyle } from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${theme.body.color};
        background-color: ${theme.body.background.color};
    }
    
    a {
        ${fgColor(theme.link.color.hout, theme.link.color.hover, `300ms`)}
    }
`;
