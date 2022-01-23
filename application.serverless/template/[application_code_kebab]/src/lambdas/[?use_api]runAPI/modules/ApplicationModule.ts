import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { RolesGuard } from '../guards/RolesGuard';
import { <%- entity_name_camel %>Module } from './<%- entity_name_camel %>Module';
import { OptionsModule } from './OptionsModule';
import { APIKeyAuthenticationMiddleware } from '../middlewares/APIKeyAuthenticationMiddleware';

@Module({
    imports: [<%- entity_name_camel %>Module, OptionsModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class ApplicationModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(APIKeyAuthenticationMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.POST });
    }
}
