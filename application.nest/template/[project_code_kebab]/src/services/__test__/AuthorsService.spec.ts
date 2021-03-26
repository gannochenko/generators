import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from '../AuthorsService';

describe('AuthorsService', () => {
    let service: AuthorsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthorsService],
        }).compile();

        service = module.get<AuthorsService>(AuthorsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
