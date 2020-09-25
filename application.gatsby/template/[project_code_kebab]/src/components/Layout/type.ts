import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    props: {
        location: {
            pathname: string;
        };
    };
}
