import styled from '@emotion/styled';
import { muiTypography, muiColor, muiSpacing } from '@gannochenko/ui.emotion';

export const CopyrightRoot = styled.div`
    text-align: center;
    ${muiTypography('micro')};
    color: ${muiColor('secondary.main')};
    margin: ${muiSpacing(2)} ${muiSpacing(1)};
`;
