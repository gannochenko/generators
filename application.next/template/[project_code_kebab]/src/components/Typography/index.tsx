import styled from 'styled-components';
import { Typography, TypographyTypeMap } from '@material-ui/core';
import { FunctionComponent } from 'react';

export const Title = styled(Typography).attrs({
    variant: 'h4',
    component: 'h1',
})`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const SubTitle = styled(Typography).attrs({
    variant: 'h5',
    component: 'h2',
})`
    margin-bottom: 1rem;
`;

export const SectionTitle = styled(Typography).attrs({
    variant: 'h6',
    component: 'h3',
})`
    margin-bottom: 1rem;
`;

export const Paragraph = styled(Typography).attrs({
    variant: 'body1',
    component: 'p',
})`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
