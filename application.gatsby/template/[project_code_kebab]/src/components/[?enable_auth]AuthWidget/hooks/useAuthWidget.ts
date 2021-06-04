import { Ref, useCallback } from 'react';
import { AuthWidgetPropsType } from '../type';
import { PropTypes } from '@material-ui/core';
import { useAuth } from '../../../hooks';

export const useAuthWidget = (
    ref: Ref<unknown>,
    props: AuthWidgetPropsType,
) => {
    const {
        isAuthenticated,
        signIn,
        userName,
        signOut,
        avatar,
        // getToken,
    } = useAuth();

    const color: PropTypes.Color = 'primary';
    const variant: 'text' | 'outlined' | 'contained' = 'contained';

    const onSingUpButtonClick = useCallback(() => signIn(), [signIn]);
    const onSingOutButtonClick = useCallback(() => signOut(), [signOut]);

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        signUpButtonProps: {
            onClick: onSingUpButtonClick,
            color,
            variant,
        },
        signOutButtonProps: {
            onClick: onSingOutButtonClick,
            color,
            variant,
        },
        avatarProps: {
            src: avatar,
        },
        userNameProps: {
            children: userName,
        },
        authenticated: isAuthenticated,
    };
};
