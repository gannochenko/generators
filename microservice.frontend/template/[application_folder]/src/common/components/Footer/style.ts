import styled from 'styled-components';
import { gap } from '@gannochenko/etc';

export const FooterRoot = styled.div`
    background-color: ${({ theme }) => theme.palette.background.dark};
    color: ${({ theme }) => theme.palette.text.contrast};
    padding: 1rem 0;
`;

export const Copyright = styled.div``;

export const Links = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    ${gap(null, '1rem')}
`;
