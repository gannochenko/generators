import axios from 'axios';

type SubmissionType = {
    message: string;
    contact: string;
};

const API_URL = process.env.API_URL;

export const contactFormSubmit = async (submission: SubmissionType) =>
    axios.post(`${API_URL}/contact-form-submit`, submission);
