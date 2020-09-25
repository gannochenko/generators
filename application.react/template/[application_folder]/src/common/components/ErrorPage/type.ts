import { HTMLAttributes } from 'react';

export type ErrorPagePropsType = {
    image: string;
    code: string;
    message: string;
    imageAuthor: string;
    imageSource: string;
    imageSourceText: string;
} & HTMLAttributes<HTMLElement>;
