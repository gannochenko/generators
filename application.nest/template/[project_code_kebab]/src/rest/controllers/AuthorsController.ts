import {
    Controller,
    Post,
    Get,
    // Header,
    Patch,
    Param,
    // HttpCode,
    Body,
    Query,
    Delete, HttpException, HttpStatus,
} from '@nestjs/common';
import { AuthorsService } from '../../services/AuthorsService';
import {
    CreateAuthorDto,
    FindAuthorDto,
    UpdateAuthorDto,
} from '../dto/AuthorsDTO';
import { Roles } from '../../utils/Roles';
import { AsyncRESTResponse, AsyncRESTResponseList, IDType } from '../../type';
import { AuthorEntity } from '../../entities/AuthorEntity';
import { createResponse } from '../../utils/createResponse';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    // todo: filter outgoing data
    @Post()
    // @Header('Cache-Control', 'none')
    // @HttpCode(204)
    @Roles('admin')
    async create(
        @Body() data: CreateAuthorDto,
    ): AsyncRESTResponse<AuthorEntity> {
        return createResponse(await this.authorsService.create(data));
    }

    // todo: filter outgoing data
    @Patch(':id')
    @Roles('admin')
    async update(
        @Param('id') id: IDType,
        @Body() data: UpdateAuthorDto,
    ): AsyncRESTResponse<AuthorEntity> {
        if (!(await this.authorsService.isElementExists(id))) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return createResponse(await this.authorsService.update(id, data));
    }

    // todo: filter outgoing data
    @Delete(':id')
    @Roles('admin')
    async delete(@Param('id') id: IDType): AsyncRESTResponse<AuthorEntity> {
        if (!(await this.authorsService.isElementExists(id))) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return createResponse(await this.authorsService.delete(id));
    }

    // todo: filter outgoing data
    @Get()
    async findAll(
        @Query() query: FindAuthorDto,
    ): AsyncRESTResponseList<AuthorEntity> {
        return createResponse(
            await this.authorsService.findAll({
                filter: {},
                limit: query.limit,
            }),
        );
    }

    // todo: filter outgoing data
    @Get(':id')
    async findOne(@Param('id') id: IDType): AsyncRESTResponse<AuthorEntity> {
        const element = await this.authorsService.findOneById(id);
        if (!element) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return createResponse(element);
    }
}
