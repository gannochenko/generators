import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_GUARD } from '@nestjs/core';
import { join } from 'path';

import { AuthorsController } from '../rest/controllers/AuthorsController';
import { AwesomeController } from '../rest/controllers/AwesomeController';

import { RolesGuard } from '../guards/RolesGuard';

import { AuthorsService } from '../services/AuthorsService';
import { PostsService } from '../services/PostsService';

import { AuthorEntity } from '../entities/AuthorEntity';
import { PostEntity } from '../entities/PostEntity';
import { UserEntity } from '../entities/UserEntity';
import { UserRoleEntity } from '../entities/UserRoleEntity';

import { isDev } from '../utils/isDev';
import { AuthorsResolver } from '../gql/resolvers/AuthorsResolver';
import { AuthenticationMiddleware } from '../middlewares/AuthenticationMiddleware';

@Module({
    imports: [
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
        GraphQLModule.forRoot({
            debug: isDev(),
            playground: isDev(),
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
    ],
    controllers: [AuthorsController, AwesomeController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },

        // rest services
        AuthorsService,
        PostsService,

        // graphql resolvers
        AuthorsResolver,
    ],
})
export class ApplicationModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthenticationMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
