import styled from 'styled-components';
import {
    muiTypography,
    muiColor,
    muiSpacing,
} from '@gannochenko/ui.styled-components';

export const CopyrightRoot = styled.div`
    text-align: center;
    ${muiTypography('micro')};
    color: ${muiColor('secondary.main')};
    margin: ${muiSpacing(2)} ${muiSpacing(1)};
`;
