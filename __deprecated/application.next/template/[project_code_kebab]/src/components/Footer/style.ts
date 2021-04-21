import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { gap } from '../../styles/mixins';
import { ThemePropsType } from '../../styles/type';

export const FooterRoot = styled.footer<ThemePropsType>`
    padding: 1rem 0;
`;

export const Copyright = styled.div``;

export const Links = styled(Typography)<ThemePropsType>`
    ${gap(undefined, '1rem')}
`;
