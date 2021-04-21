import styled from 'styled-components';

export const LayoutRoot = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Body = styled.main`
    flex-grow: 2;
`;

export const Overflow = styled.div`
    overflow-x: hidden;
    height: 100%;
`;
