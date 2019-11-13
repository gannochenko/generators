import { ApolloServer } from 'apollo-server-express';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { Express } from 'express';

import { types } from './types';
import { resolvers } from './resolvers';
import { DataSources } from './type';

export const useGraphQL = (app: Express, { settings, database }: DataSources) => {
    const server = new ApolloServer({
        typeDefs: mergeTypes(types, { all: true }),
        resolvers: mergeResolvers(resolvers),
        context: () => {
            return {
                token: 'foo',
                // connection: database.getConnection(), // todo: how to close this connection in the end?
            };
        },
        // @ts-ignore
        dataSources: () => ({
            database,
            settings,
        }),
        debug: __DEV__,
        playground: __DEV__,
        introspection: __DEV__,
    });
    server.applyMiddleware({ app });
};
