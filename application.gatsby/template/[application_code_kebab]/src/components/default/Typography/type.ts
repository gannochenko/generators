import { HTMLAttributes } from 'react';
import {
    StylePropsType,
} from '@gannochenko/ui.styled-components';

export type TypographyPropsType = Partial<{
    // custom props here

    enableVerticalGutter: boolean;
    variant: string;
}> &
    HTMLAttributes<HTMLElement>;

export type TypographyRootPropsType = TypographyPropsType & StylePropsType;
