import express from 'express';
// import React from 'react';
import helmet from 'helmet';
import path from 'path';
import { Settings, logger } from '@bucket-of-bolts/util';
import { enableCORS } from "./cors";

// import { renderToString } from 'react-dom/server';
// import Application from "../common/Application";

const app = express();
const settings = new Settings();

if (!__DEV__) {
    process
        .on('unhandledRejection', err => {
            logger.error('Unhandled rejection', err);
        })
        .on('uncaughtException', err => {
            logger.error('Uncaught exception', err);
        });
}

// catching normal unhandled exceptions
app.use((err, req, res, next) => {
    logger.error('Unhandled exception', err);
    res.send(__DEV__ ? err.message : 'Nasty error');
});
app.set('port', process.env.PORT || process.env.NETWORK__PORT);

enableCORS(app, settings);

app.use(helmet());
app.use(express.static(path.join(process.cwd(), 'public')));

// todo: use renderer here
app.get('*', async (req, res) => {

    // todo: ssr is not ready yet
    const application = ''; // renderToString(<Application />);

    let clientScript = '<script src="/client.js"></script>';
    if (__DEV__) {
        clientScript = `<script>document.write('<sc'+'ript src="http://'+document.location.hostname+':<%- port_hmr %>/client.js"></sc'+'ript>')</script>`;
    }

    const html = `<!doctype html>
    <html lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title><%- application_name %></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
            <script>
                window.__settings = ${JSON.stringify(await settings.forward(['api.url']))};
            </script>
            ${clientScript}
        </body>
    </html>`;

    res.send(html);
});

export default app;
