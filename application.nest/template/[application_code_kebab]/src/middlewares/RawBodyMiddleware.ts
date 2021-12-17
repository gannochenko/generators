import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { raw } from 'body-parser';

/* This middleware is only used when binary body should be enabled on some routes */
@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
    public use(req: Request, res: Response, next: NextFunction): any {
        raw({
            type: '*/*',
            limit: '5mb',
        })(req, res, next);
    }
}
