import { RESTResponse } from '../type';

export const createResponse = <D>(data: D): RESTResponse<D> => {
    return {
        data: data,
    };
};
