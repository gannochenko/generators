import { ChangeEvent, ForwardedRef, useCallback, useEffect } from 'react';
import { useMutation } from 'react-query';
import { ContactsPropsType } from '../type';
import { useRootRef } from '../../../../hooks';
import { sendMessage } from '../../../../services/message';
import { ContactFormState } from '../../../../states';

export const useContacts = <E extends HTMLDivElement>(
    ref: ForwardedRef<E>,
    props: ContactsPropsType,
) => {
    const {
        message,
        contact,
        agreed,
        set,
        reset,
    } = ContactFormState.useContainer();

    const rootRef = useRootRef<E>(ref);

    const formSubmission = useMutation(sendMessage);
    const onSubmitButtonClick = useCallback(() => {
        formSubmission.mutate({ text: message, contact });
    }, [formSubmission, message, contact]);

    const { isLoading, isSuccess, isError } = formSubmission;

    useEffect(() => {
        if (isSuccess) {
            reset();
        }
    }, [isSuccess]);

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref: rootRef,
        },
        messageFieldProps: {
            disabled: isLoading,
            value: message,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
                set({ message: event.target.value }),
        },
        contactFieldProps: {
            disabled: isLoading,
            value: contact,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
                set({ contact: event.target.value }),
        },
        consentButtonProps: {
            disabled: isLoading,
            checked: agreed,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
                set({ agreed: event.target.checked }),
        },
        submitButtonProps: {
            disabled: isLoading || !message || !agreed,
            onClick: onSubmitButtonClick,
        },
        success: isSuccess,
        failure: isError,
        loading: isLoading,
        showForm: !isSuccess,
    };
};
