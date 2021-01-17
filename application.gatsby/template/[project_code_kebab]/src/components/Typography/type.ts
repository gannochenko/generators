import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';
import { StylePropsType } from '../../style/type';

export type TypographyPropsType = Partial<{
    // custom props here

    enableVerticalGutter: boolean;
    variant: string;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

export type TypographyRootPropsType = TypographyPropsType & StylePropsType;
