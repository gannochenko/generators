import cors from 'cors';
import { Express } from 'express';

export const useCORS = async (app: Express) => {
    const corsHosts = (process.env.NETWORK__CORS || '').toString()
        .split(',')
        .map((host: string) => host.trim());

    if (corsHosts.length) {
        app.use(
            cors({ origin: corsHosts.length === 1 ? corsHosts[0] : corsHosts }),
        );
    }
};
