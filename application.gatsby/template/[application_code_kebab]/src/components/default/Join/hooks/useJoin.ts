import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { JoinPropsType } from '../type';
import { join } from '../../../../services/auth';
import { AuthState } from '../../../../states';

export const useJoin = <E extends HTMLDivElement>({
    token,
    email,
    ...props
}: JoinPropsType) => {
    const { setToken } = AuthState.useContainer();

    const joinMutation = useMutation('join', join, {
        // retry: false,
    });

    const { isLoading, isSuccess, isError, data } = joinMutation;

    useEffect(() => {
        joinMutation.mutate({ token, email });
    }, [token, email]);

    useEffect(() => {
        if (isSuccess) {
            setToken(data?.data?.token ?? '');
            // @ts-ignore
            window.location = '/';
        }
    }, [isSuccess, data]);

    return {
        rootProps: props,
        isLoading,
        isSuccess,
        isError,
    };
};
