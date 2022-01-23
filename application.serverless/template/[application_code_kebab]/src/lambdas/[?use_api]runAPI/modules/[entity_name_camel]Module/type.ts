import { ServiceResponseType } from '../../type';

type IdFieldsType = {
    id: string;
    slug: string;
};

export type DynamoDBItemUpdateExpression = {
    UpdateExpression: string;
    ExpressionAttributeValues: Record<string, unknown>;
};

type CommonFieldsType = {
    name: string;
};

type DateFieldsType = {
    createdAt: string;
    updatedAt?: string | null;
};

////////

export type FieldsType = IdFieldsType & CommonFieldsType;

export type CreateInputType = CommonFieldsType;

export type CreateOutputType = ServiceResponseType<
    IdFieldsType & CommonFieldsType & DateFieldsType
>;

export type FindAllInputType = {
    limit?: number;
    lastId?: string;
};

export type FindAllOutputType = ServiceResponseType<
    CoolFieldsType[],
    { lastId: string | null }
>;

export type GetByIdOutputType =
    ServiceResponseType<<%- entity_name_camel %>FieldsType | null>;

