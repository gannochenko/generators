import { Theme as MUITheme } from '@material-ui/core';
import { ObjectLiteralType } from '../type';

export type ThemeType = MUITheme & {
    typographyGutter: ObjectLiteralType<ObjectLiteralType>;
    tokenIndex: ObjectLiteralType;
} & ObjectLiteralType;

export type StylePropsType = {
    theme: ThemeType;
};

export type BreakpointNameType = 'lg' | 'sm' | 'md' | 'xs' | 'xl';
