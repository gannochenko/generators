import { Result } from '@bucket-of-bolts/express-mvc';
import { GetSampleArguments, PutSampleArguments } from './type';
import { SampleService } from '../../../service/sample';
import { Context } from '../../type';

export const sampleResolvers = {
    Query: {
        getSample: async (source: any, args: GetSampleArguments, context: Context /* , ast: any */) => {
            const { id } = args;
            const result = new Result();

            const connection = await context.getDatabaseConnection();

            result.data = await SampleService.getById(id);

            return result;
        },
    },
    Mutation: {
        putSample: async (source: any, args: PutSampleArguments, context: Context /* , ast: any */) => {
            const { data } = args;
            const result = new Result();

            result.data = await SampleService.create(data);

            return result;
        },
    },
};
