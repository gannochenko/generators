import styled from '@emotion/styled';
import { marginProps, reset, muiSpacing } from '@gannochenko/ui.emotion';
import { Avatar, Popover, Typography } from '@mui/material';
import { AuthWidgetRootPropsType } from './type';

export const AuthWidgetRoot = styled.div<AuthWidgetRootPropsType>`
    ${reset};
    padding-left: ${muiSpacing(5)};
    ${marginProps};
`;

export const AuthWidgetAvatar = styled(Avatar)`
    width: ${muiSpacing(7.5)};
    height: ${muiSpacing(7.5)};
    cursor: pointer;
`;

export const AuthWidgetPopover = styled(Popover)`
    .MuiPopover-paper {
        margin-top: 0.7rem;
        width: 15rem;
        padding: 1rem;
    }
`;

export const AuthWidgetUserName = styled(Typography)`
    margin-bottom: 1rem !important;
`;
