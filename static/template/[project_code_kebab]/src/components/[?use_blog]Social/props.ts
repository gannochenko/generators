import { HTMLAttributes } from 'react';

export type Props = {
    type: string;
    src?: string;
} & Pick<HTMLAttributes<HTMLElement>, 'onMouseOver' | 'onMouseOut'>;
