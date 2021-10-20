import { Module } from '@nestjs/common';
import { AuthorsController } from './AuthorsController';
import { AuthorsService } from './AuthorsService';

@Module({
    controllers: [AuthorsController],
    providers: [AuthorsService],
    exports: [AuthorsService],
})
export class AuthorsModule {}
