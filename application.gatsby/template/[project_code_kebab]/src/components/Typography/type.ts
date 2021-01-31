import { HTMLAttributes } from 'react';
import { ObjectLiteralType, StylePropsType } from '@gannochenko/ui.styled-components';

export type TypographyPropsType = Partial<{
    // custom props here

    enableVerticalGutter: boolean;
    variant: string;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

export type TypographyRootPropsType = TypographyPropsType & StylePropsType;
