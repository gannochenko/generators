import { HTMLAttributes } from 'react';
import { ThemePropsType } from '../../styles/type';

export type HeaderPropsType = {
    // custom props here
} & HTMLAttributes<HTMLElement>;

export type HeaderRootPropsType = {} & HeaderPropsType & ThemePropsType;
