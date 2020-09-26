import { Theme } from '@material-ui/core';

export type ThemePropsType = {
    theme: Theme;
};

export type StylePropsType = { classNames?: string } & ThemePropsType;
