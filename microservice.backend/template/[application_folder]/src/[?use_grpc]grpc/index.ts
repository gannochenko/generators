// @ts-ignore
import grpc from 'grpc';
import { Express } from 'express';
import { logInfo } from '@gannochenko/etc';
import { promisify } from 'util';

import { services } from './services';
import { implementations } from './implementations';
import { ObjectLiteral } from '../type';
import { Callback } from './type';

export const useGRPC = (
    app: Express,
    clientEndpoints: ObjectLiteral<string> = {},
    dataSources: ObjectLiteral = {},
    contextBuilder = async () => ({}),
) => {
    let server: grpc.Server;
    const clients: ObjectLiteral = {};

    services.forEach((schema: ObjectLiteral) => {
        const definition = grpc.loadPackageDefinition(schema);

        // look for services
        Object.keys(definition).forEach((key) => {
            if (definition[key].service) {
                // check if have implementation
                if (implementations[key]) {
                    if (!server) {
                        server = new grpc.Server();
                    }

                    server.addService(
                        definition[key].service,
                        Object.keys(implementations[key]).reduce(
                            (result, methodName) => {
                                return {
                                    [methodName]: async (
                                        call: any,
                                        callback: Callback,
                                    ) => {
                                        const context = await contextBuilder();
                                        return implementations[key][methodName](
                                            call,
                                            context,
                                        )
                                            .then((res: unknown) =>
                                                callback(null, res),
                                            )
                                            .catch((error: Error) =>
                                                callback(error, null),
                                            );
                                    },
                                    ...result,
                                };
                            },
                            {},
                        ),
                    );
                } else {
                    if (clientEndpoints[key]) {
                        const methodNames = Object.keys(
                            definition[key].service,
                        );

                        const connector = () => {
                            const client = new definition[key](
                                `${clientEndpoints[key]}:50051`,
                                grpc.credentials.createInsecure(),
                            );

                            methodNames.forEach((methodName) => {
                                client[methodName] = promisify(
                                    client[methodName],
                                );
                            });

                            return client;
                        };

                        clients[`get${key}`] = connector;
                    }
                }
            }
        });
    });

    if (server) {
        const host = app.get('host');
        const port = process.env.NETWORK__GRPC_PORT || '50051';

        server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());
        server.start();

        logInfo(`🚀 Board gRPC is ready at http://${host}:${port}`);
    }

    return clients;
};
