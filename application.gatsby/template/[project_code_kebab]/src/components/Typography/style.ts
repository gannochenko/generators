import styled from 'styled-components';
import {
    foregroundColor,
    getPropBlocker,
} from '@gannochenko/ui.styled-components';
import { Typography } from '@material-ui/core';
import { TypographyRootPropsType } from './type';

const customProps = {
    enableVerticalGutter: true,
};

const getRootDynamicStyle = ({
    enableVerticalGutter,
    variant,
    theme,
}: TypographyRootPropsType) => {
    const { typographyGutter } = theme;

    if (enableVerticalGutter && variant && variant in typographyGutter) {
        return typographyGutter[variant];
    }

    return '';
};

export const TypographyRoot = styled(Typography).withConfig(
    getPropBlocker(customProps),
)<TypographyRootPropsType>`
    ${getRootDynamicStyle};
`;

export const TypographyAnchor = styled.a<{ name: string }>`
    text-decoration: none;
    ${({ theme }) =>
        foregroundColor(
            theme.palette.grey['600'],
            theme.palette.grey['800'],
            '300ms',
        )}
`;
