import { HTMLAttributes } from 'react';

export type InputPropsType = {
    // custom props here
    width: string;
    maxLength?: number;
} & HTMLAttributes<HTMLInputElement>;
