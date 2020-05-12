import { Endpoint, Get } from '@gannochenko/express.mvc';

@Endpoint('/')
export class HomeController {
    @Get()
    public respond() {
        return 'Hi there!';
    }
}
