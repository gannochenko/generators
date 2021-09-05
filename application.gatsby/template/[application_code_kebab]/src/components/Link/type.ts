import { AnchorHTMLAttributes } from 'react';

export type LinkPropsType = Partial<{
    to: string;
    inverted: boolean;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement>;
