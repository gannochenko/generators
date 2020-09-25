import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    bgColor: string;
    codeKeyColor: string;
    blockKey: string;
    wide?: boolean;
}
