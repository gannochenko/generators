import { HTMLAttributes, ReactNode } from 'react';
import { ThemePropsType } from '../../styles/type';

export type ContainerType = 'standard' | 'wide' | 'narrow';

export type ContainerPropsType = {
    children?: ReactNode;
    type?: ContainerType;
    contentAlign?: 'center' | 'left' | 'right';
    marginY?: string;
} & HTMLAttributes<HTMLElement>;

export type ContainerRootPropsType = {} & ContainerPropsType & ThemePropsType;
