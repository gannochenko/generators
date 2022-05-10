import styled from '@emotion/styled';
import { marginProps, reset } from '@gannochenko/ui.emotion';
import {
    Button,
    Alert,
    FormControl as MUIFormControl,
    Typography,
    FormControlLabel,
} from '@mui/material';

import { ContactsRootPropsType } from './type';

export const ContactsRoot = styled.div<ContactsRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const ContactFormFieldWrapper = styled(MUIFormControl)`
    margin-bottom: 1rem;
`;

export const ContactFormTitle = styled(Typography)`
    margin-bottom: 1rem;
`;

export const ContactFormSmallNote = styled.div`
    font-size: 0.8rem;
    margin-top: 2rem;
`;

export const ContactFormActions = styled.div`
    display: flex;
`;

export const ContactFormAgree = styled(FormControlLabel)`
    margin-left: 2rem;
    .MuiTypography-root {
        font-size: 0.8rem;
    }
`;

export const ContactFormSubmitButton = styled(Button)`
    transition: width 200ms ease;
    .MuiCircularProgress-root {
        margin-right: 0.5rem;
    }
`;

export const ContactFormFailureMessage = styled(Alert)`
    margin-bottom: 1rem;
`;

export const ContactFormConsent = styled.span`
    user-select: none;
`;
