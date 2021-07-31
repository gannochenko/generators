import axios from 'axios';

type MessageType = {
    text: string;
    contact: string;
};

const API_URL = process.env.API_URL;

export const sendMessage = async (message: MessageType) =>
    axios.post(`${API_URL}/message`, message);
