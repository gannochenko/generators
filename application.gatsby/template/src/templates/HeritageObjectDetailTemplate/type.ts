import { HTMLAttributes } from 'react';
import { HeritageObjectType } from '../../services/HeritageObject/type';

export type HeritageObjectDetailPropsType = {
    data: {
        allHeritageObject?: {
            nodes?: HeritageObjectType[];
        };
    };
    path: string;
} & HTMLAttributes<HTMLElement>;
