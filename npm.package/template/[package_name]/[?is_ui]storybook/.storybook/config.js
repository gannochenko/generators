import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

<% if (use_ui_boilerplate) { %>
import { defaultTheme } from "../../src/themes";
<% } else { %>
const defaultTheme = {};
<% } %>

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
        ...defaultTheme,
    },
];

addDecorator(withThemesProvider(themes));
