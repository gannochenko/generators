import { AnchorHTMLAttributes } from 'react';
import { StylePropsType } from '@gannochenko/ui.emotion';

export type LinkPropsType = Partial<{
    to: string;
    inverted: boolean;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export type LinkRootPropsType = StylePropsType & LinkPropsType;
