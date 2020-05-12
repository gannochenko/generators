import { ApolloServer } from 'apollo-server-express';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { Express } from 'express';
import { logInfo } from '@gannochenko/etc';

import { types } from './types';
import { resolvers } from './resolvers';
import { DataSources } from './type';
import { ObjectLiteral } from '../type';

export const useGraphQL = (
    app: Express,
    dataSources: DataSources,
    createContext: () => Promise<ObjectLiteral>,
) => {
    const server = new ApolloServer({
        typeDefs: mergeTypes(types, { all: true }),
        // @ts-ignore
        resolvers: mergeResolvers(resolvers),
        context: async () => {
            return {
                token: 'foo',
                ...(await createContext()),
            };
        },
        // @ts-ignore
        dataSources: () => dataSources,
        debug: __DEV__,
        playground: __DEV__,
        introspection: __DEV__,
    });
    server.applyMiddleware({ app });

    if (__DEV__) {
        logInfo(`🚀 <%- application_name %> GraphQL playground is running at http://${app.get('host')}:${app.get('port')}/graphql`);
    }
};
