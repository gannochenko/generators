import { HTMLAttributes } from 'react';

export type ListingPropsType = {
    children: any;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;
