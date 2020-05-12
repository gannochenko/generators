import { HTMLAttributes } from 'react';
import { ObjectLiteral } from '../../../type';

export type PageProgressPropsType = {
    state: ObjectLiteral;
} & HTMLAttributes<HTMLElement>;
