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
    Delete,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { AuthorsService } from '../AuthorsService';
import {
    CreateAuthorDto,
    FindAuthorsDto,
    UpdateAuthorDto,
} from './AuthorsDTO';
import { Roles } from '../../../utils/Roles';
import { UserRoleEnum } from '../../../entities';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    // todo: filter outgoing data
    @Post()
    // @Header('Cache-Control', 'none')
    // @HttpCode(204)
    @Roles(UserRoleEnum.admin)
    async create(
        @Body() data: CreateAuthorDto,
    ) {
        return {
            data: await this.authorsService.create(data),
        };
    }

    // todo: filter outgoing data
    @Patch(':id')
    @Roles(UserRoleEnum.admin)
    async update(
        @Param('id') id: string,
        @Body() data: UpdateAuthorDto,
    ) {
        if (!(await this.authorsService.isElementExists(id))) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return {
            data: await this.authorsService.update(id, data),
        };
    }

    // todo: filter outgoing data
    @Delete(':id')
    @Roles(UserRoleEnum.admin)
    async delete(@Param('id') id: string) {
        if (!(await this.authorsService.isElementExists(id))) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return {
            data: await this.authorsService.delete(id),
        };
    }

    // todo: filter outgoing data
    @Get()
    async findAll(
        @Query() query: FindAuthorsDto,
    ) {
        return {
            data: await this.authorsService.findAll({
                filter: {},
                limit: query.limit,
            }),
        };
    }

    // todo: filter outgoing data
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const element = await this.authorsService.findOneById(id);
        if (!element) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return {
            data: element,
        };
    }
}
