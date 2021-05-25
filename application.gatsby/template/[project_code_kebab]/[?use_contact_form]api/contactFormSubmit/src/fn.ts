import axios from 'axios';
import { compile } from 'pug';
import { template } from './template';

const compiledFunction = compile(template);

export const fn = async (message: string, contact: string) => {
    const htmlContent = compiledFunction({
        message,
        contact,
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
