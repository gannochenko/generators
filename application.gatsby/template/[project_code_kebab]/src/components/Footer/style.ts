import styled from 'styled-components';
import {
    muiTypography,
    muiColor,
    muiSpacing,
    contentAlignment,
} from '@gannochenko/ui.styled-components';

export const FooterRoot = styled.footer`
    position: relative;
    margin: 0;
    padding: ${muiSpacing(5)};
    ${contentAlignment('center', 'center', 'column')}

    background-color: ${muiColor('primary.main')};
    color: ${muiColor('primary.contrastText')};
    ${muiTypography('body2')};
`;

export const FooterInfo = styled.div`
    &:not(:first-child) {
        padding-top: ${muiSpacing(2)};
    }
`;

export const FooterNoWrap = styled.span`
    white-space: nowrap;
`;
