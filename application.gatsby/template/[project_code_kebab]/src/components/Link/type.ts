import { AnchorHTMLAttributes } from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

export type LinkPropsType = Partial<{
    to: string;
    inverted: boolean;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    ObjectLiteralType;
