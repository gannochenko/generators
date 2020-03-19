import { addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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

addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
        },
    },
});
