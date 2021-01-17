import styled from 'styled-components';
import {
    muiTypography,
    muiColor,
    muiSpacing,
    contentAlignment,
    gutter,
} from '@gannochenko/ui.styled-components';

export const FooterRoot = styled.footer`
    position: relative;
    margin: 0;
    padding: ${muiSpacing(8)};
    ${muiSpacing(4)};
    ${contentAlignment('center', 'center', 'column')}

    background-color: ${muiColor('primary.main')};
    color: ${muiColor('primary.contrastText')};
    ${muiTypography('body2')};
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const FooterInfo = styled.div`
    display: flex;
    ${gutter(undefined, '1rem')};
`;

export const FooterNoWrap = styled.div`
    white-space: nowrap;
`;
