import styled from '@emotion/styled';
import { muiSpacing } from '@gannochenko/ui.emotion';

export const HeaderRoot = styled.header`
    position: relative;
    min-width: 320px;
    flex-shrink: 0;
`;

export const HeaderOffset = styled.div`
    height: ${muiSpacing(10)};
`;
