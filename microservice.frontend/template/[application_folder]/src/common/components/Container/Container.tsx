import React, { FunctionComponent } from 'react';

import { ContainerStandard, ContainerWide, ContainerNarrow } from './style';

import { Props } from './type';

export const Container: FunctionComponent<Props> = (props) => {
    const { children, type = 'standard' } = props;

    if (type === 'wide') {
        return <ContainerWide {...props}>{children}</ContainerWide>;
    }
    if (type === 'narrow') {
        return <ContainerNarrow {...props}>{children}</ContainerNarrow>;
    }
    return <ContainerStandard {...props}>{children}</ContainerStandard>;
};
