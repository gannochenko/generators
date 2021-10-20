import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
// import { RouteInfo } from '@nestjs/common/interfaces';

import { AuthorEntity, PostEntity, UserEntity, UserRoleEntity } from '../entities';
import { RolesGuard } from '../guards/RolesGuard';

import { Auth0AuthenticationMiddleware } from '../middlewares/Auth0AuthenticationMiddleware';
import { AuthorsModule } from './AuthorsModule';
import { PostsModule } from './PostsModule';

// const rawBodyParsingRoutes: Array<RouteInfo> = [
//     {
//         path: '/authors/upload',
//         method: RequestMethod.POST,
//     },
// ];

@Module({
    imports: [
        AuthorsModule,
        PostsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            port: 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: false,
            host: process.env.DB_HOST,
            entities: [AuthorEntity, PostEntity, UserEntity, UserRoleEntity],
            // autoLoadEntities: true,
        }),
    ],
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
            // .apply(RawBodyMiddleware)
            // .forRoutes(...rawBodyParsingRoutes)
            // .apply(JsonBodyMiddleware)
            // .exclude(...rawBodyParsingRoutes)
            // .forRoutes('*')
            .apply(Auth0AuthenticationMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
