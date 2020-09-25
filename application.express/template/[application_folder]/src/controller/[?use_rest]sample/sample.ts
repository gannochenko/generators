import {
    Endpoint,
    Get,
    Put,
    BodyInput,
    ERROR_INTERNAL,
    Result,
} from '@gannochenko/express.mvc';

import { Context } from '../type';
import { SampleService } from '../../service/sample';
import { SamplePutDTO } from './dto';

@Endpoint('/sample')
export class SampleController {
<% if (use_grpc) { %>
    @Get('random/:start/:end/')
    public async get(
        { start, end }: any,
        { context: { grpc } }: Context,
    ): Promise<Result> {
        const result = new Result();

        result.data = await grpc.<%- application_code_pascal %>.Generator.generateNumber({
            start,
            end,
        });

        return result;
    }
<% } %>
    @Get(':id')
    public async get(
        { id } = { id: '' },
<% if (use_postgres) { %>
        { context: { connection } }: Context,
<% } %>
    ): Promise<Result> {
        const sampleService = new SampleService(<% if (use_postgres) { %>connection<% } %>);

        const result = new Result();

        result.data = await sampleService.getById(id);
        if (!result.data) {
            result.status = 404;
        }

        return result;
    }

    @Put()
    @BodyInput(SamplePutDTO)
    public async put(
        params: any,
        { body<% if (use_postgres) { %>, context: { connection }<% } %> }: Context,
    ): Promise<Result> {
        const sampleService = new SampleService(<% if (use_postgres) { %>connection<% } %>);

        const result = new Result();

        const item = await sampleService.create(body);
        if (!item || !item.id) {
            result.errors.push({
                message: 'Was not created',
                code: 'not_created',
                type: ERROR_INTERNAL,
            });
        } else {
            result.data = item;
        }

        return result;
    }
}
