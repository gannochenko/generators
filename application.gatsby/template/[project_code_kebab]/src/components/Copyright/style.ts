import styled from 'styled-components';

export const CopyrightContainer = styled.div`
    text-align: center;
    font-size: ${props => props.theme.fontSize.micro};
    color: ${({ theme }) => theme.color.secondary};
    margin: 0.5rem 0.25rem;
`;
