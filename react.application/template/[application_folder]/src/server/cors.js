import cors from 'cors';

export const useCORS = (app) => {
    let corsHosts = process.env.NETWORK__CORS || [];
    if (corsHosts) {
        corsHosts = corsHosts
            .toString()
            .split(',')
            .map((host) => host.trim());
    }

    if (corsHosts.length) {
        app.use(
            cors({ origin: corsHosts.length === 1 ? corsHosts[0] : corsHosts }),
        );
    }
};
