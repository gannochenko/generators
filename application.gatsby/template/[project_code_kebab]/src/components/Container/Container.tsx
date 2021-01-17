import React, { FC } from 'react';
import { Container as MUIContainer } from '@material-ui/core';
import { ContainerPropsType } from './type';

export const Container: FC<ContainerPropsType> = ({children, ...props}) => {
    return (
        <MUIContainer {...props}>
            {children as any}
        </MUIContainer>
    );
};

Container.defaultProps = {
    maxWidth: 'lg',
};
