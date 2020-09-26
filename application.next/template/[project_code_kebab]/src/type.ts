import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NullableType<X = any> = X | null;

export type ObjectLiteralType<P = any> = {
    [k: string]: P;
};

export type IndexableType<O, P = any> = O & ObjectLiteralType<P>;

export type ScalarType = string | number;

export type PageType<P = {}> = NextPage<P> & {
    renderLayout: (children: ReactNode) => ReactElement;
};
