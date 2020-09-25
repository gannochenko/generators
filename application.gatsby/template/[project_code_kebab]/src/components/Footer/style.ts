import styled from 'styled-components';
import { align, gap } from '@gannochenko/etc';

export const Container = styled.footer`
    position: relative;
    margin: 0;
    padding: 2rem 1rem;
    ${align('center', 'center', 'column')}

    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 300;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Info = styled.div`
    display: flex;
    ${gap(null, '1rem')};
`;

export const NoWrap = styled.div`
    white-space: nowrap;
`;
