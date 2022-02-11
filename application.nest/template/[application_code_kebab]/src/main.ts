import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

import { ApplicationModule } from './modules/ApplicationModule';
import { isDev } from './utils/isDev';

(async () => {
    const app = await NestFactory.create(ApplicationModule, {
        cors: {
            origin: isDev() ? '*' : process.env.CORS
        },
    });
    if (!isDev()) {
        // gql playground will not work with helmet
        app.use(helmet());
    }
    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
        }),
    );
    app.useGlobalPipes(
        new ValidationPipe({ transform: true, whitelist: true }),
    );

    if (isDev()) {
        const options = new DocumentBuilder()
            .setTitle('Authors <-> Posts example')
            .setDescription('The API description')
            .setVersion('1.0')
            .addTag('posts')
            .build();
        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(process.env.PORT || 3000);
})();
