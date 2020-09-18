import styled from 'styled-components';
import { colorEdward, foregroundColor } from '@gannochenko/etc';

export const H1 = styled.h1`
    margin: 4rem 0 2rem 0;
    font-size: ${({ theme }) => theme.fontSize.large};
`;

export const H2 = styled.h2`
    margin: 4rem 0 2rem 0;
    font-size: 1.5rem;
`;

export const H3 = styled.h3`
    margin: 2rem 0 2rem 0;
    font-size: 1.3rem;
`;

export const H4 = styled.h3`
    margin: 2rem 0 2rem 0;
    font-size: 1.1rem;
`;

export const Anchor = styled.a<{ name: string; }>`
    text-decoration: none;
    ${({ theme }) => foregroundColor(colorEdward, theme.color.link.hover, '300ms')}
`;
