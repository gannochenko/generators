import styled from 'styled-components';

export const HR = styled.div`
    text-align: center;
    margin: 2rem 0;
    &:before {
        content: '***';
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.color.secondary};
    }
`;
