import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ContactsPropsType } from './type';
import {
    ContactsRoot,
    ContactFormFieldWrapper,
    ContactFormTitle,
    ContactFormSmallNote,
    ContactFormActions,
    ContactFormAgree,
    ContactFormSubmitButton,
    ContactFormFailureMessage,
    ContactFormConsent,
} from './style';
import { useContacts } from './hooks/useContacts';
import { Link } from '../Link';

export const Contacts = forwardRef<HTMLDivElement, ContactsPropsType>(
    function Contacts(props, ref) {
        const {
            rootProps,
            submitButtonProps,
            messageFieldProps,
            contactFieldProps,
            consentButtonProps,
            children,
            hasPersonalContacts,
            success,
            failure,
            loading,
            showForm,
        } = useContacts(ref, props);

        return (
            <ContactsRoot {...rootProps}>
                <Grid container spacing={6}>
                    <Grid item md={6} sm={12}>
                        <ContactFormTitle>
                            Напишите нам через форму обратной связи
                        </ContactFormTitle>
                        {success && (
                            <Alert severity="success">
                                Спасибо, ваше сообщение отправлено!
                            </Alert>
                        )}
                        {failure && (
                            <ContactFormFailureMessage severity="error">
                                К сожалению, произошла ошибка. Попробуйте
                                отправить сообщение еще раз.
                            </ContactFormFailureMessage>
                        )}
                        {showForm && (
                            <form>
                                <ContactFormFieldWrapper fullWidth>
                                    <TextField
                                        multiline
                                        rows={5}
                                        id="outlined-basic"
                                        label="Ваше сообщение *"
                                        variant="outlined"
                                        {...messageFieldProps}
                                    />
                                </ContactFormFieldWrapper>
                                <ContactFormFieldWrapper fullWidth>
                                    <TextField
                                        multiline
                                        label="Как с вами связаться"
                                        variant="outlined"
                                        {...contactFieldProps}
                                    />
                                </ContactFormFieldWrapper>
                                <ContactFormActions>
                                    <ContactFormSubmitButton
                                        color="primary"
                                        variant="contained"
                                        {...submitButtonProps}
                                    >
                                        {loading && (
                                            <CircularProgress
                                                color="inherit"
                                                size="1.5rem"
                                            />
                                        )}
                                        Отправить
                                    </ContactFormSubmitButton>
                                    <ContactFormAgree
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                color="primary"
                                                {...consentButtonProps}
                                            />
                                        }
                                        label={
                                            <ContactFormConsent>
                                                Я даю согласие на{' '}
                                                <Link to="/personal-data">
                                                    обработку персональных
                                                    данных
                                                </Link>{' '}
                                                *
                                            </ContactFormConsent>
                                        }
                                    />
                                </ContactFormActions>
                                <ContactFormSmallNote>
                                    * &mdash; поля, обязательные для заполнения
                                </ContactFormSmallNote>
                            </form>
                        )}
                    </Grid>
                    {hasPersonalContacts && (
                        <Grid item md={6} sm={12}>
                            <ContactFormTitle>
                                Или свяжитесь с нами в соцсетях
                            </ContactFormTitle>
                            {children}
                        </Grid>
                    )}
                </Grid>
            </ContactsRoot>
        );
    },
);

Contacts.defaultProps = {};
