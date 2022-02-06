import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';

import { awsOptions } from '../../utils/awsOptions';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
const dynamoDB = new DynamoDB.DocumentClient({
    ...awsOptions,
    apiVersion: '2012-08-10',
});
const TABLE_NAME = process.env.AWS_OPTIONS_TABLE_NAME ?? '';

@Injectable()
export class OptionsService {
    public async set(code: string, value: string) {
        const dynamodbItem = {
            code,
            value,
        };

        try {
            await dynamoDB
                .put({
                    TableName: TABLE_NAME,
                    Item: dynamodbItem,
                    ReturnConsumedCapacity: 'TOTAL',
                })
                .promise();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Could not set a value');
        }

        return { data: dynamodbItem.value };
    }

    public async get(code: string) {
        try {
            const result = await dynamoDB
                .get({
                    TableName: TABLE_NAME,
                    Key: {
                        code,
                    },
                })
                .promise();

            return (result?.Item?.value as string) ?? null;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Could not get an value');
        }
    }
}
