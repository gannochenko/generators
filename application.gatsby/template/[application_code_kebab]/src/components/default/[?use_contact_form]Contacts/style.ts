import styled from 'styled-components';
import { marginProps, reset } from '@gannochenko/ui.styled-components';
import MUIFormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { propsBlocker } from '../../../util';

import { ContactsRootPropsType } from './type';

export const ContactsRoot = styled.div.withConfig(
    propsBlocker,
)<ContactsRootPropsType>`
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
