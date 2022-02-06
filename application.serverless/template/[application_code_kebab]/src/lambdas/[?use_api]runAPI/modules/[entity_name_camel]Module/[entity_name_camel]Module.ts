import { Module } from '@nestjs/common';
import { <%- entity_name_camel %>Controller } from './<%- entity_name_camel %>Controller';
import { <%- entity_name_camel %>Service } from './<%- entity_name_camel %>Service';
import { OptionsModule } from '../OptionsModule';

@Module({
    imports: [OptionsModule],
    controllers: [<%- entity_name_camel %>Controller],
    providers: [<%- entity_name_camel %>Service],
    exports: [<%- entity_name_camel %>Service],
})
export class <%- entity_name_camel %>Module {}
