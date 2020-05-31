import styled from 'styled-components';
import { Link } from 'gatsby';

export const Body = styled.div`
    flex-grow: 2;
    margin-bottom: 5rem;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    font-size: ${props => props.theme.fontSize.small};
`;
