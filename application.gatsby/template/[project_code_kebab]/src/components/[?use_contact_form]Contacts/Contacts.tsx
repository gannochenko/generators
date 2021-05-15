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
                            Please contact us by using this form
                        </ContactFormTitle>
                        {success && (
                            <Alert severity="success">
                                Thank you, your message has been sent!
                            </Alert>
                        )}
                        {failure && (
                            <ContactFormFailureMessage severity="error">
                                Sorry, an error occurred. Please try again later!
                            </ContactFormFailureMessage>
                        )}
                        {showForm && (
                            <form>
                                <ContactFormFieldWrapper fullWidth>
                                    <TextField
                                        multiline
                                        rows={5}
                                        id="outlined-basic"
                                        label="Message *"
                                        variant="outlined"
                                        {...messageFieldProps}
                                    />
                                </ContactFormFieldWrapper>
                                <ContactFormFieldWrapper fullWidth>
                                    <TextField
                                        multiline
                                        label="How to contact you"
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
                                        Send
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
                                                I agree with{' '}
                                                <Link to="/personal-data">
                                                    personal data processing
                                                </Link>{' '}
                                                *
                                            </ContactFormConsent>
                                        }
                                    />
                                </ContactFormActions>
                                <ContactFormSmallNote>
                                    * &mdash; required fields
                                </ContactFormSmallNote>
                            </form>
                        )}
                    </Grid>
                    {hasPersonalContacts && (
                        <Grid item md={6} sm={12}>
                            <ContactFormTitle>
                                Find us in social networks
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
