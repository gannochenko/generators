import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

// import { createUploadLink } from 'apollo-upload-link';
// import { RetryLink } from 'apollo-link-retry';

import Axios from 'axios';
import { Settings } from '@bucket-of-bolts/util';

export const ClientContext = React.createContext({});
export const withClient = Component => {
    const WithClient = props => (
        <ClientContext.Consumer>
            {value => <Component {...props} client={value}/>}
        </ClientContext.Consumer>
    );

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithClient.displayName = `withClient(${wrappedComponentName})`;
    return WithClient;
};

export class Client {
    protected settings: Settings;

    protected apollo;

    public constructor(settings) {
        this.settings = settings;
    }

    public async query(parameters) {
        const apollo = await this.getApollo();
        return apollo.query({ ...parameters, fetchPolicy: 'network-only' });
    }

    public async mutate(...args) {
        const apollo = await this.getApollo();
        return apollo.mutate(...args);
    }

    public async get(path) {
        const url = await this.getUrl();
        return Axios.get(`${url}/${path}`);
    }

    /**
     * @private
     * @returns {ApolloClient}
     */
    public async getApollo() {
        if (!this.apollo) {
            this.apollo = new ApolloClient({
                link: ApolloLink.from([
                    onError(({ graphQLErrors, networkError }) => {
                        if (graphQLErrors) {
                            graphQLErrors.forEach(({ message, locations, path }) => {
                                console.error(`[GraphQL error]: ${message}, Location: ${locations}, Path: ${path}`);
                            });
                        }

                        if (networkError) {
                            console.error(`[Network error]: ${networkError}`);
                        }
                    }),
                    new HttpLink(`${await this.getUrl()}/graphql`),
                ]),
                cache: new InMemoryCache(),
            });
        }

        return this.apollo;
    }

    public async getUrl() {
        let url = this.settings.get('api.url');
        if (__DEV__) {
            url = url.replace('localhost', document.location.hostname);
        }

        return url;
    }
}

export const createClient = settings => {
    return new Client(settings);
};
