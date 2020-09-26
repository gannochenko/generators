import { FunctionComponent } from 'react';

import {
    ContainerRootStandard,
    ContainerRootWide,
    ContainerRootNarrow,
} from './style';

import { ContainerPropsType } from './type';

export const Container: FunctionComponent<ContainerPropsType> = (props) => {
    const { children, type = 'standard' } = props;

    if (type === 'wide') {
        return <ContainerRootWide {...props}>{children}</ContainerRootWide>;
    }
    if (type === 'narrow') {
        return <ContainerRootNarrow {...props}>{children}</ContainerRootNarrow>;
    }
    return <ContainerRootStandard {...props}>{children}</ContainerRootStandard>;
};
