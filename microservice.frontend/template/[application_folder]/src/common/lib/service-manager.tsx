import React from 'react';

import { services } from '../services';
import { ObjectLiteral } from '../../type';
import { Service } from './service';

export class ServiceManager {
    private services: ObjectLiteral<Service> = {};

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getService(name: string) {
        if (!this.services[name]) {
            this.services[name] = services[name]
                ? // @ts-ignore
                  new services[name]()
                : null;
        }

        return this.services[name];
    }
}
