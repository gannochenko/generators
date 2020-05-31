import styled from 'styled-components';
import { rectangle } from '@gannochenko/etc';

export const Image = styled.img`
    ${rectangle('2rem')};
    user-select: none;
    flex-shrink: 0;
`;
