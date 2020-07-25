import { HTMLAttributes } from 'react';
import { StatePropsType } from '../../state/context';

export type PageProgressPropsType = StatePropsType &
    HTMLAttributes<HTMLElement>;
