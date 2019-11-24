import React, { ComponentType } from 'react';
import { ApolloClient, MutationOptions, QueryOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import Axios from 'axios';

import { Settings } from './settings';
// import { createUploadLink } from 'apolloClientInstance-upload-link';
// import { RetryLink } from 'apolloClientInstance-link-retry';
import { Nullable, ObjectLiteral } from '../../type';

type NullableClient = Nullable<Client>;

export const ClientContext = React.createContext<NullableClient>(null);
export const withClient = <L extends { client: NullableClient }>(
    Component: ComponentType<L>,
) => {
    const WithClient = (props: ObjectLiteral) => (
        <ClientContext.Consumer>
            {value => (
                // @ts-ignore
                <Component {...props} client={value} />
            )}
        </ClientContext.Consumer>
    );

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithClient.displayName = `withClient(${wrappedComponentName})`;
    return WithClient;
};

export class Client {
    protected settings: Settings;
    protected url = '';
    protected apolloClientInstance?: ApolloClient<unknown>;

    public constructor(settings: Settings) {
        this.settings = settings;
    }

    public get apollo() {
        return this.makeApollo();
    }

    public get axios() {
        return Axios;
    }

    public async query(parameters: QueryOptions) {
        return this.apollo.query({
            ...parameters,
            fetchPolicy: 'network-only',
        });
    }

    public async mutate(parameters: MutationOptions) {
        return this.apollo.mutate(parameters);
    }

    public async get(path: string) {
        const url = this.getUrl();
        return Axios.get(`${url}/${path}`);
    }

    private makeApollo() {
        if (!this.apolloClientInstance) {
            this.apolloClientInstance = new ApolloClient({
                link: ApolloLink.from([
                    onError(({ graphQLErrors, networkError }) => {
                        if (graphQLErrors) {
                            graphQLErrors.forEach(
                                ({ message, locations, path }) => {
                                    console.error(
                                        `[GraphQL error]: ${message}, Location: ${locations}, Path: ${path}`,
                                    );
                                },
                            );
                        }

                        if (networkError) {
                            console.error(`[Network error]: ${networkError}`);
                        }
                    }),
                    new HttpLink({
                        uri: `${this.getUrl()}/graphql`,
                    }),
                ]),
                cache: new InMemoryCache(),
            });
        }

        return this.apolloClientInstance;
    }

    public getUrl() {
        if (!this.url) {
            this.url = this.settings.getSync('API__URL');
            if (__DEV__) {
                this.url = this.url.replace(
                    'localhost',
                    document.location.hostname,
                );
            }
        }

        return this.url;
    }
}
