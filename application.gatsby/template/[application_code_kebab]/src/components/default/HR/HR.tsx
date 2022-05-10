import styled from '@emotion/styled';
import { muiColor } from '@gannochenko/ui.emotion';

export const HR = styled.div`
    text-align: center;
    margin: 2rem 0;
    &:before {
        content: '***';
        letter-spacing: 0.5rem;
        color: ${muiColor('grey.600')};
    }
`;
