import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export abstract class ApolloService {
    private apollo?: ApolloClient<unknown>;
    private url = '';

    protected getApollo() {
        if (!this.apollo) {
            this.apollo = new ApolloClient({
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

        return this.apollo;
    }

    protected getUrl() {
        if (!this.url) {
            this.url = process.env.API__URL || '';
            if (__DEV__ && document) {
                this.url = this.url.replace(
                    'localhost',
                    document.location.hostname,
                );
            }
        }

        return this.url;
    }
}
