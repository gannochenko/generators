import { GetSampleArguments, PutSampleArguments } from './type';

export const sampleResolvers = {
    Query: {
        getSample: async (source: any, args: GetSampleArguments, { dataSources }: any, ast: any) => {
            return true;
        },
    },
    Mutation: {
        putSample: async (source: any, args: PutSampleArguments, { dataSources }: any, ast: any) => {
            const { data } = args;

            return true;
        },
    },
};
