import styled from 'styled-components';
import {
    marginProps,
    reset,
    getPropBlocker,
    muiSpacing,
} from '@gannochenko/ui.styled-components';

import { AuthWidgetRootPropsType } from './type';
import { Avatar, Popover, Typography } from '@material-ui/core';

// all unwanted custom props should be blacklisted
const customProps = {};

// @ts-ignore
export const AuthWidgetRoot = styled.div.withConfig(
    getPropBlocker(customProps),
)<AuthWidgetRootPropsType>`
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
