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
        { runtime: { database } }: InputContext,
    ): Promise<Result> {
        const result = new Result();

        result.data = await SampleService.getById(id);

        if (!result.data) {
            result.status = 404;
        }

        return result;
    }

    @Put()
    @BodyInput(SamplePutDTO)
    public async put(
        {},
        { body, runtime: { database } }: InputContext,
    ): Promise<Result> {
        const result = new Result();

        const id = await SampleService.create(body);
        if (!id) {
            result.errors.push({
                message: 'Sample error',
                code: 'sample_error',
                type: ERROR_INTERNAL,
            });
        }

        return result;
    }
}
