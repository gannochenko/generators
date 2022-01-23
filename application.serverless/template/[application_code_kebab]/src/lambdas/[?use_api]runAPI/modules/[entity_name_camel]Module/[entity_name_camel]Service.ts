import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v4 } from 'uuid';
import { DynamoDB } from 'aws-sdk';

import { makeSlug } from '../../utils/makeSlug';
import { awsOptions } from '../../utils/awsOptions';
import {
    CreateInputType,
    CreateOutputType,
    FindAllInputType,
    FindAllOutputType,
    GetByIdOutputType,
    FieldsType,
    DynamoDBItemUpdateExpression,
} from './type';
import { tryExecute } from '../../utils/tryExecute';
import { OptionsService } from '../OptionsModule/OptionsService';
import { OptionCodes } from '../OptionsModule/type';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
const dynamoDB = new DynamoDB.DocumentClient({
    ...awsOptions,
    apiVersion: '2012-08-10',
});
const TABLE_NAME = process.env.AWS_OBJECT_TABLE_NAME ?? '';

@Injectable()
export class <%- entity_name_camel %>Service {
    constructor(private readonly optionsService: OptionsService) {}

    public async create(
        item: CreateInputType,
    ): Promise<CreateOutputType> {
        const {
            name,
        } = item;

        const id = v4();
        const slug = makeSlug(name);

        const dynamodbItem = {
            id,
            slug,
            name,
            createdAt: new Date().toISOString(),
            version: 1,
        };

        try {
            await dynamoDB
                .put({
                    TableName: TABLE_NAME,
                    Item: dynamodbItem,
                    ReturnConsumedCapacity: 'TOTAL',
                })
                .promise();

            await this.optionsService.set(OptionCodes.dataUpdated, '1');
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(
                'Could not create an object',
            );
        }

        return { data: dynamodbItem, aux: {} };
    }

    public async findAll({
        limit,
        lastId,
    }: FindAllInputType = {}): Promise<FindAllOutputType> {
        try {
            const result = await dynamoDB
                .scan({
                    TableName: TABLE_NAME,
                    Limit: limit,
                    ExclusiveStartKey: lastId
                        ? {
                              id: lastId,
                          }
                        : undefined,
                })
                .promise();

            return {
                data: (result?.Items as FieldsType[]) ?? [],
                aux: {
                    lastId: (result?.LastEvaluatedKey?.id as string) ?? null,
                },
            };
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Could not query objects');
        }
    }

    // todo: get only the requested fields, don't use *
    public async getById(id: string): Promise<GetByIdOutputType> {
        const item = await this.getItem(id);
        return {
            data: (item as FieldsType) ?? null,
            aux: {},
        };
    }

    public async isExists(id: string): Promise<boolean> {
        return !!(await this.getItem(id, ['id']));
    }

    public async getItem(id: string, fields?: string[]) {
        try {
            const result = await dynamoDB
                .get({
                    TableName: TABLE_NAME,
                    Key: {
                        id,
                    },
                    ...(fields ? { AttributesToGet: fields } : {}),
                })
                .promise();

            return (result?.Item as <%- entity_name_camel %>Entity) ?? null;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Could not get an element');
        }
    }

    private async updateItem(
        id: string,
        expression: DynamoDBItemUpdateExpression,
        message = 'Could not update item',
    ) {
        return tryExecute(async () => {
            await dynamoDB
                .update({
                    TableName: TABLE_NAME,
                    Key: { id },
                    UpdateExpression: `SET ${expression.UpdateExpression}, updatedAt = :u, version = if_not_exists(version, :vs) + :vinc`,
                    ExpressionAttributeValues: {
                        ...expression.ExpressionAttributeValues,
                        ':u': new Date().toISOString(),
                        ':vs': 1,
                        ':vinc': 1,
                    },
                    ReturnValues: 'UPDATED_NEW',
                })
                .promise();
            await this.optionsService.set(OptionCodes.dataUpdated, '1');
        }, message);
    }
}
