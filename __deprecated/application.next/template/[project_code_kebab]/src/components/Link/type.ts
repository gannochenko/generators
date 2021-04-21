import { LinkProps } from 'next/link';
import { StylePropsType } from '../../styles/type';

export type LinkPropsType = { classNames?: string } & LinkProps;

export type LinkRootPropsType = StylePropsType;
