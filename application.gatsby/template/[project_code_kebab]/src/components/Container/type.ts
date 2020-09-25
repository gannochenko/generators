import { ReactNode } from 'react';

export type ContainerType = 'standard' | 'wide' | 'narrow';

export interface Props {
    children?: ReactNode;
    type?: ContainerType;
    contentAlign?: 'center' | 'left' | 'right';
    marginY?: string;
}
