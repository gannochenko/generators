import React, { ComponentType } from 'react';

import { Nullable, ObjectLiteral } from '../../type';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getService(name: string) {
        return null;
    }
}
