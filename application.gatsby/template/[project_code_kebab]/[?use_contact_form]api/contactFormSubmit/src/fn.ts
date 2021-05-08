import axios from 'axios';
import { escape } from 'html-escaper';
import { compile } from 'pug';
import { template } from './template';

export const fn = async (message: string, contact: string) => {
    const escapedMessage = escape(message);
    const escapedContact = escape(contact);

    const compiledFunction = compile(template);

    const htmlContent = compiledFunction({
        escapedMessage,
        escapedContact,
    });

    return axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
            sender: {
                name: '🤖 RoboToad',
                email: 'robotoad@<%- project_domain %>',
            },
            to: [
                {
                    email: '<%- author_email %>',
                    name: '<%- author_name %>',
                },
            ],
            subject: 'New message from "<%- project_name %>"',
            htmlContent,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'api-key': process.env.SENDIN_BLUE_API,
            },
        },
    );
};
