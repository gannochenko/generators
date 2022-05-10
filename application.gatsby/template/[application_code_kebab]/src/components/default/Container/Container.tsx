import React, { FC } from 'react';
import styled from '@emotion/styled';
import {
    heightProps,
    HeightPropsType,
    muiSpacing,
} from '@gannochenko/ui.emotion';
import { Container as MUIContainer } from '@mui/material';

import { ContainerPropsType } from './type';

const ContainerRoot = styled(MUIContainer)<HeightPropsType>`
    padding-left: ${muiSpacing(5)};
    padding-right: ${muiSpacing(5)};
    ${heightProps};
`;

export const Container: FC<ContainerPropsType> = ({ children, ...props }) => {
    return <ContainerRoot {...props}>{children as any}</ContainerRoot>;
};

Container.defaultProps = {
    maxWidth: 'lg',
};
