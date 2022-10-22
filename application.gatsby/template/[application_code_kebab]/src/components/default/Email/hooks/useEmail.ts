import {useEffect, useState} from "react";
import {emailFirstPart, emailSecondPart} from "../../../../meta/email";

export const useEmail = () => {
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setEmail(emailFirstPart);
        }, 500);
        setTimeout(() => {
            setDomain(emailSecondPart);
        }, 700);
    }, []);

    return {
        noRender: !email || !domain,
        email,
        domain,
    };
};