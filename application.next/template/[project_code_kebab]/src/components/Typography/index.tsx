import styled from 'styled-components';
import { Typography, TypographyTypeMap } from '@material-ui/core';
import { FunctionComponent } from 'react';

export const Header = styled(Typography).attrs({
    variant: 'h4',
    component: 'h1',
})`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const SubHeader = styled(Typography).attrs({
    variant: 'h5',
    component: 'h2',
})`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const SectionHeader = styled(Typography).attrs({
    variant: 'h6',
    component: 'h3',
})`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const Paragraph = styled(Typography).attrs({
    variant: 'body1',
    component: 'p',
})`
    margin-bottom: 1.5rem;
`;
