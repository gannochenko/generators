import { HTMLAttributes } from 'react';
import { StylePropsType } from '@gannochenko/ui.styled-components';
import { TypographyProps } from '@material-ui/core';

export type TypographyPropsType = Partial<{
    enableVerticalGutter: boolean;
    variant: TypographyProps['variant'];
    component: string;
}> &
    Omit<HTMLAttributes<HTMLElement>, 'color'>;

export type MainHeaderRootPropsType = StylePropsType;
