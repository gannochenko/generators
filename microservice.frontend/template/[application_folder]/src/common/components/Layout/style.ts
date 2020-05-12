import styled from 'styled-components';

export const CentralContainer = styled.div<{
    topPadding?: boolean;
    bottomPadding?: boolean;
}>`
    padding-top: ${({ topPadding }) => (topPadding ? '2rem' : 0)};
    padding-bottom: ${({ bottomPadding }) => (bottomPadding ? '3rem' : 0)};
`;
