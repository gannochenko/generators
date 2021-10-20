import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

/* This middleware is only used when binary body should be enabled on some routes */
@Injectable()
export class JsonBodyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        json()(req, res, next);
    }
}
