import styled from '@emotion/styled';
import { foregroundColor, MUIThemeType } from '@gannochenko/ui.emotion';
import { Typography } from '@mui/material';
import { TypographyRootPropsType } from './type';

const getRootDynamicStyle = ({
    enableVerticalGutter,
    variant,
    theme,
}: TypographyRootPropsType) => {
    const typography = theme?.typography ?? {};

    if (enableVerticalGutter) {
        const gutter = typography?.[variant ?? '']?.gutter ?? {
            marginTop: 0,
            marginBottom: 0,
        };
        return `
            margin-top: ${gutter.marginTop} !important;
            margin-bottom: ${gutter.marginBottom} !important;
        `;
    }

    return '';
};

export const TypographyRoot = styled(Typography)<TypographyRootPropsType>`
    ${getRootDynamicStyle};
`;

export const TypographyAnchor = styled.a<{
    name: string;
    theme?: MUIThemeType;
}>`
    text-decoration: none;
    ${({ theme }) =>
        foregroundColor(
            theme?.palette.grey['600'] ?? '',
            theme?.palette.grey['800'] ?? '',
            '300ms',
        )}
`;
