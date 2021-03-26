import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('awesome')
export class AwesomeController {
    // todo: filter outgoing data
    @Get()
    async hello(): Promise<string> {
        return 'hello!';
    }
}
