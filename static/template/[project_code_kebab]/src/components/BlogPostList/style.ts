import styled from 'styled-components';

export const BlogPostListContainer = styled.div`
    margin-bottom: 2rem;
`;

export const LinkContainer = styled.div`
    margin-top: 4rem;
`;

export const Posts = styled.div`
    & > *:not(:last-child) {
        margin-bottom: 1rem;
    }
`;
