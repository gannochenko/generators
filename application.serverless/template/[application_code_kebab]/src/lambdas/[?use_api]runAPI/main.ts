import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { Server } from 'http';
import { createServer } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

import { ApplicationModule } from './modules/ApplicationModule';

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = [
    'multipart/form-data',
    'image/png',
    'image/jpg',
];

let cachedServer: Server;

export const bootstrapServer = async (): Promise<Server> => {
    if (!cachedServer) {
        const expressApp = express();
        const app = await NestFactory.create(
            ApplicationModule,
            new ExpressAdapter(expressApp),
        );
        app.setGlobalPrefix('<%- api_path_prefix %>');

        if (!__DEV__) {
            app.use(helmet());
        }
        app.useGlobalPipes(
            new ValidationPipe({ transform: true, whitelist: true }),
        );

        app.use(eventContext());
        await app.init();
        cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
    }
    return cachedServer;
};
