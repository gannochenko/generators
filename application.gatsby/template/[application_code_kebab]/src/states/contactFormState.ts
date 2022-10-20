import { useState } from 'react';
import { createContainer } from 'unstated-next';

const initialFormState = {
    message: '',
    contact: '',
    agreed: false,
};

const useContactForm = (initialState = initialFormState) => {
    const [data, setData] = useState(initialState);
    const set = (newData: Partial<typeof initialFormState>) =>
        setData({ ...data, ...newData });
    const reset = () => setData({ ...initialFormState });

    return { ...data, set, reset };
};

export const ContactFormState = createContainer(useContactForm);
