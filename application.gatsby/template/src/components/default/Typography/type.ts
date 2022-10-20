import { HTMLAttributes } from 'react';
import { StylePropsType } from '@gannochenko/ui.emotion';
import { TypographyProps } from '@mui/material';

export type TypographyPropsType = Partial<{
    enableVerticalGutter: boolean;
    variant: TypographyProps['variant'];
    component: string;
}> &
    Omit<HTMLAttributes<HTMLElement>, 'color'>;

export type TypographyRootPropsType = TypographyPropsType & StylePropsType;
