import React, { ComponentType } from 'react';

import { services } from '../services';
import { Nullable, ObjectLiteral } from '../../type';
import { Service } from './service';

type NullableServiceManager = Nullable<ServiceManager>;

export const ServiceManagerContext = React.createContext<
    NullableServiceManager
    >(null);
export const withClient = <
    L extends { serviceManager: NullableServiceManager }
    >(
    Component: ComponentType<L>,
) => {
    const WithClient = (props: ObjectLiteral) => (
        <ServiceManagerContext.Consumer>
            {(value) => (
                // @ts-ignore
                <Component {...props} serviceManager={value} />
            )}
        </ServiceManagerContext.Consumer>
    );

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithClient.displayName = `withClient(${wrappedComponentName})`;
    return WithClient;
};

export class ServiceManager {
    private services: ObjectLiteral<Service> = {};

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getService(name: string) {
        if (!this.services[name]) {
            this.services[name] = services[name]
                // @ts-ignore
                ? new services[name]()
                : null;
        }

        return this.services[name];
    }
}
