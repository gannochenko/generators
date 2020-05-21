import gql from 'graphql-tag';

import {Service} from '../lib/service';

/** https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.query */
export class SampleGQLService extends Service {
    async mutateSomething(flag: boolean) {
        return Service.getApollo().mutate({
            mutation: gql`
                mutation MutateSomething($flag: Boolean) {
                    mutateSomething(flag: $flag) {
                        errors {
                            code
                        }
                    }
                }
            `,
            variables: {
                flag,
            },
        });
    }

    async querySomething() {
        return Service.getApollo().mutate({
            mutation: gql`
                mutation MutateSomething($flag: Boolean) {
                    mutateSomething(flag: $flag) {
                        errors {
                            code
                        }
                    }
                }
            `,
            variables: {
                flag,
            },
        });
    }
}
