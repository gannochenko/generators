import {
    Controller,
    Post,
    Param,
    Body,
    Query,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { <%- entity_name_camel %>Service } from '../<%- entity_name_camel %>Service';
import {
    CreateDto,
    FindDto,
    // UpdateDto,
} from './CoolDTO';
import { Roles } from '../../../utils/Roles';
import { UserRoleEnum } from '../../../entities';

@Controller('<%- entity_name %>')
export class <%- entity_name_camel %>Controller {
    constructor(
        private readonly service: <%- entity_name_camel %>Service,
    ) {}

    @Post('create')
    @Roles(UserRoleEnum.contributor)
    async create(@Body() data: CreateDto) {
        return this.service.create(data);
    }

    @Post('findall')
    @Roles(UserRoleEnum.contributor, UserRoleEnum.cicd)
    async findAll(@Query() { limit, lastId }: FindDto) {
        return this.service.findAll({
            limit,
            lastId,
        });
    }

    @Post('find/:id')
    @Roles(UserRoleEnum.contributor, UserRoleEnum.cicd)
    async findOne(@Param('id') id: string) {
        const result = await this.service.getById(id);
        if (!result.data) {
            // https://docs.nestjs.com/exception-filters
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return result;
    }
}
