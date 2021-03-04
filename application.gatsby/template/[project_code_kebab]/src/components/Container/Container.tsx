import React, { FC } from 'react';
import { muiSpacing } from '@gannochenko/ui.styled-components';
import { Container as MUIContainer } from '@material-ui/core';
import styled from 'styled-components';
import { ContainerPropsType } from './type';

const ContainerRoot = styled(MUIContainer)`
    padding-left: ${muiSpacing(5)};
    padding-right: ${muiSpacing(5)};
`;

export const Container: FC<ContainerPropsType> = ({ children, ...props }) => {
    return <ContainerRoot {...props}>{children as any}</ContainerRoot>;
};

Container.defaultProps = {
    maxWidth: 'lg',
};
