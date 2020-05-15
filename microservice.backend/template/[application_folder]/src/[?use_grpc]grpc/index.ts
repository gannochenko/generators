// @ts-ignore
import grpc from 'grpc';
import { logInfo, lCFirst } from '@gannochenko/etc';
import util from 'util';
import { Express } from 'express';

import gRPCSchema from './schema.proto';
import { implementation } from './implementation';
import { Nullable, ObjectLiteral } from '../type';

type HandlerAsync = (...args: any[]) => Promise<unknown>;
type HandlersAsync = ObjectLiteral<HandlerAsync>;

type Callback = (err: Nullable<Error>, res: any) => void;
type HandlerCallback = (call: any, callback: Callback) => void;
type HandlersCallback = ObjectLiteral<HandlerCallback>;

let serverInstance: Nullable<grpc.Server> = null;

const getServer = (host: string, port: string | number) => {
    if (!serverInstance) {
        serverInstance = new grpc.Server();
        serverInstance.bind(
            `${host}:${port}`,
            grpc.ServerCredentials.createInsecure(),
        );
    }

    return serverInstance;
};

const hasServer = () => !!serverInstance;

const transformToCallbacks = (handlers: HandlersAsync) => {
    const result: HandlersCallback = {};
    Object.keys(handlers).forEach((handlerName) => {
        result[handlerName] = (call: any, callback: Callback) => {
            handlers[handlerName](call)
                .then((res: unknown) => callback(null, res))
                .catch((error: Error) => callback(error, null));
        };
    });

    return result;
};

export const useGRPC = async (app: Express, options?: { server: boolean, client: boolean; }) => {
    const { server, client } = options || {};

    const host = app.get('host') || '0.0.0.0';
    const port = process.env.GRPC__PORT || 50051;

    const definition = grpc.loadPackageDefinition(gRPCSchema);
    const namespaces = Object.keys(definition);
    if (!namespaces.length) {
        throw new Error('gRPC: no namespaces detected');
    }

    const clients: ObjectLiteral<ObjectLiteral> = {};

    namespaces.forEach((nameSpaceCode: string) => {
        const nameSpaceServices = definition[nameSpaceCode];
        const serviceNames = Object.keys(nameSpaceServices);

        serviceNames.forEach((serviceName) => {
            const Service = nameSpaceServices[serviceName];
            if (Service.service) {
                if (server !== false) {
                    if (
                        !implementation[nameSpaceCode] ||
                        !implementation[nameSpaceCode][serviceName]
                    ) {
                        throw new Error(
                            `gRPC: no implementations found for service ${nameSpaceCode}/${serviceName}`,
                        );
                    }

                    getServer(host, port).addService(
                        Service.service,
                        transformToCallbacks(
                            implementation[nameSpaceCode][serviceName],
                        ),
                    );
                }

                if (client !== false) {
                    const clientInstance = new Service(
                        `${host}:${port}`,
                        grpc.credentials.createInsecure(),
                    );

                    const methodNames = Object.keys(Service.service);
                    methodNames.forEach((methodName) => {
                        methodName = lCFirst(methodName);
                        if (typeof clientInstance[methodName] === 'function') {
                            clientInstance[methodName] = util.promisify(
                                clientInstance[methodName],
                            );
                        }
                    });

                    clients[nameSpaceCode] = clients[nameSpaceCode] || {};
                    clients[nameSpaceCode][serviceName] = clientInstance;
                }
            }
        });
    });

    if (hasServer()) {
        getServer(host, port).start();
        logInfo(`🚀 <%- application_name %> gRPC server is ready at http://${host}:${port}`);
    }

    return clients;
};
