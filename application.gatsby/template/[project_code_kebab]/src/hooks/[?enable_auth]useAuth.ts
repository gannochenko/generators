import { useAuth0 } from '@auth0/auth0-react';

export const useAuth = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
        user,
        logout,
        getAccessTokenSilently,
    } = useAuth0();

    return {
        isAuthenticated,
        id: user ? (user.sub as string) : undefined,
        userName: user ? (user.name as string) : undefined,
        avatar: user ? (user.picture as string) : undefined,
        signIn: loginWithRedirect,
        signOut: logout,
        getToken: getAccessTokenSilently,
    };
};
