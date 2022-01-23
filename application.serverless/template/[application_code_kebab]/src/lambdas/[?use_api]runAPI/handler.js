import { proxy } from 'aws-serverless-express';
import { bootstrapServer } from './main';

export const handler = async (event, context) => {
    const cachedServer = await bootstrapServer();
    return proxy(cachedServer, event, context, 'PROMISE').promise;
};
