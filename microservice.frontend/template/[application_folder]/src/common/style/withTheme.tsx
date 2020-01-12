import React, { ComponentType, forwardRef, Ref } from 'react';
import {
    media as styledMedia,
    grid as styledGrid,
    cell as styledCell,
} from '@bucket-of-bolts/styled-companion';
import { theme } from './theme';

import { ObjectLiteral } from '../../type';

interface GridTheme {
    [k: string]: ObjectLiteral<string | number>;
}

type Theme = ObjectLiteral;
type RefUnknown = Ref<unknown>;

export const ThemeContext = React.createContext<Theme>({});
export const withTheme = (
    Component: ComponentType<{ ref?: RefUnknown; theme?: Theme }>,
    path = '',
) => {
    const WithTheme = (props: ObjectLiteral, ref: RefUnknown) => (
        <ThemeContext.Consumer>
            {value => (
                <Component
                    {...props}
                    ref={ref}
                    theme={path.length ? value[path] : value}
                />
            )}
        </ThemeContext.Consumer>
    );

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithTheme.displayName = `withTheme(${wrappedComponentName})`;

    const WithThemeAndRef = forwardRef(WithTheme);

    return WithThemeAndRef;
};

export const media = (rules: ObjectLiteral<string>) =>
    styledMedia(rules, theme.grid);

export const grid = (rules: GridTheme = {}) => styledGrid(rules, theme.grid);

export const cell = (rules: ObjectLiteral<string | number> = {}) =>
    styledCell(rules, theme.grid);
