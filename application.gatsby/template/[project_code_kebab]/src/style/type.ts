import { Theme as MUITheme } from '@material-ui/core';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

export type ThemeType = MUITheme & {
    typographyGutter: ObjectLiteralType<ObjectLiteralType>;
    tokenIndex: ObjectLiteralType;
} & ObjectLiteralType;
