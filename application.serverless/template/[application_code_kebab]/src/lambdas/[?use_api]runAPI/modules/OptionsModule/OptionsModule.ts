import { Module } from '@nestjs/common';

import { OptionsService } from './OptionsService';

@Module({
    providers: [OptionsService],
    exports: [OptionsService],
})
export class OptionsModule {}
