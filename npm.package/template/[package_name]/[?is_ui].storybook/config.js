import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
    },
    {
        name: 'Dark',
        backgroundColor: '#000',
    },
];

addDecorator(withThemesProvider(themes));
