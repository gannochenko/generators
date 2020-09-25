import { Endpoint, Get } from '@gannochenko/express.mvc';

@Endpoint('/health')
export class HealthController {
    @Get()
    public report() {
        return '1';
    }
}
