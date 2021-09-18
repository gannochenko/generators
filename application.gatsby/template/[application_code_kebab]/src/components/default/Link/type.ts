import { AnchorHTMLAttributes } from 'react';
import { StylePropsType } from '@gannochenko/ui.styled-components';

export type LinkPropsType = Partial<{
    to: string;
    inverted: boolean;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export type LinkRootPropsType = StylePropsType & LinkPropsType;
