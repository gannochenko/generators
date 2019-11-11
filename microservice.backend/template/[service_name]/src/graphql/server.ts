import { ApolloServer } from 'apollo-server-express';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { Express } from 'express';

import { types } from './types';
import { resolvers } from './resolvers';
import {ServerOptions} from './type';

export const useGraphQL = (app: Express, { settings, database }: ServerOptions) => {
    const server = new ApolloServer({
        typeDefs: mergeTypes(types, { all: true }),
        resolvers: mergeResolvers(resolvers),
        context: () => {
            return {
                token: 'foo',
                // connection: database.getConnection(), // todo: how to close this connection in the end?
            };
        },
        dataSources: {
            settings,
            database,
        },
        debug: __DEV__,
        playground: __DEV__,
        introspective: __DEV__,
    });
    server.applyMiddleware({ app });
};
