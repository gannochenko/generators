import styled from 'styled-components';

import { Link } from '../Link';
import { Link as GatsbyLink } from 'gatsby';

export const BlogPostCardRoot = styled.div``;

export const Data = styled.div`
    padding: 1rem;
`;

export const ViewPost = styled(Link)`
    text-align: right;
`;

export const Title = styled.div`
    display: flex;
    align-items: baseline;
`;

export const TitleLink = styled(GatsbyLink)`
    //font-size: ${({ theme }) => theme.fontSize.bigger};
    font-weight: 600;
    color: inherit;
    &:focus,
    &:active,
    &:visited,
    &:hover {
        color: inherit;
    }
    text-decoration: none;
`;

export const Date = styled.div`
    font-size: ${({ theme }) => theme.fontSize.small};
    background-color: ${({ theme }) => theme.color.link.normal};
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    flex-shrink: 0;
    margin-right: 1rem;
`;

export const Preview = styled(GatsbyLink)`
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.secondary};
    font-size: ${({ theme }) => theme.fontSize.standard};
    line-height: 1.5;
    display: block;
    text-decoration: none;
`;
