// @ts-ignore
import { Schema } from '@project-minimum/core';
import {
    Endpoint,
    Get,
    Put,
    Patch,
    BodyInput,
    ERROR_REQUEST,
    ERROR_INTERNAL,
    Result,
} from '@bucket-of-bolts/express-mvc';

import { InputContext } from '../../lib/type';
import SampleService from '../../service/sample';
import { SamplePutDTO } from './input.dto';

@Endpoint('/sample')
export class SampleController {
    @Get(':id')
    public async get(
        { id } = { id: '' },
        { runtime: { connectionPool } }: InputContext,
    ): Promise<Result> {
        const result = new Result();

        result.data = {
            id: 'fd568886-a2d1-4399-95ca-0376ea0f13d4',
            title: 'Foo',
        };

        if (!result.data) {
            result.status = 404;
        }

        return result;
    }

    @Put()
    @BodyInput(SamplePutDTO)
    public async put(
        {},
        { body, runtime: { connectionPool } }: InputContext,
    ): Promise<Result> {
        const result = new Result();

        result.errors.push({
            message: 'Sample error',
            code: 'sample_error',
            type: ERROR_INTERNAL,
        });

        return result;
    }
}
