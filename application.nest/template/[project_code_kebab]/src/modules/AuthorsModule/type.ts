import {ServiceResponseType} from '../../type';

export type CreateAuthorInputType = {
    firstName: string;
    lastName: string;
};

export type CreateAuthorOutputType = ServiceResponseType<{}>;

export type UpdateAuthorInputType = {
    firstName?: string;
    lastName?: string;
};

export type UpdateAuthorOutputType = ServiceResponseType<{}>;

export type DeleteAuthorOutputType = ServiceResponseType<{}>;

export type FindAuthorsInputType = {
    filter?: Record<string, unknown>;
    limit?: number;
};

export type FindAuthorsOutputType = ServiceResponseType<{}[]>;

export type FindOneAuthorOutputType = ServiceResponseType<{}>;
