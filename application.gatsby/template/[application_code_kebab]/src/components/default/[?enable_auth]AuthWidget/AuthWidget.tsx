import React, { forwardRef, FC } from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Button, PopoverOrigin } from '@material-ui/core';

import { AuthWidgetPropsType } from './type';
import {
    AuthWidgetRoot,
    AuthWidgetAvatar,
    AuthWidgetPopover,
    AuthWidgetUserName,
} from './style';
import { useAuthWidget } from './hooks/useAuthWidget';

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
} as PopoverOrigin;

const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
} as PopoverOrigin;

export const AuthWidget = forwardRef<HTMLDivElement, AuthWidgetPropsType>(
    function AuthWidget(props, ref) {
        const {
            rootProps,
            signUpButtonProps,
            signOutButtonProps,
            avatarProps,
            userNameProps,
            authenticated,
        } = useAuthWidget(ref, props);

        return (
            <AuthWidgetRoot {...rootProps}>
                <PopupState variant="popover" popupId="auth-popover">
                    {(popupState) => (
                        <>
                            <AuthWidgetAvatar
                                alt="Remy Sharp"
                                {...bindTrigger(popupState)}
                                {...avatarProps}
                            />
                            <AuthWidgetPopover
                                {...bindPopover(popupState)}
                                anchorOrigin={anchorOrigin}
                                transformOrigin={transformOrigin}
                            >
                                {authenticated && (
                                    <>
                                        <AuthWidgetUserName
                                            {...userNameProps}
                                        />
                                        <Button {...signOutButtonProps}>
                                            Sign out
                                        </Button>
                                    </>
                                )}
                                {!authenticated && (
                                    <Button {...signUpButtonProps}>
                                        Log in / Sign up
                                    </Button>
                                )}
                            </AuthWidgetPopover>
                        </>
                    )}
                </PopupState>
            </AuthWidgetRoot>
        );
    },
);

AuthWidget.defaultProps = {};
