import { NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { getConnection } from 'typeorm';
import { UserEntity } from '../entities/UserEntity';

export class AuthenticationMiddleware implements NestMiddleware {
    use(req, res, next) {
        const domain = process.env.AUTH0_DOMAIN;
        const audience = process.env.AUTH0_AUDIENCE;

        jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${domain}.auth0.com/.well-known/jwks.json`,
            }),
            audience: audience,
            issuer: `https://${domain}.auth0.com/`,
            algorithms: ['RS256'],
        })(req, res, (err) => {
            if (err) {
                const status = err.status || 500;
                const message = err.message || 'Unable to process the request.';
                return res.status(status).send({
                    message,
                });
            }

            (async () => {
                let roles: string[] = [];
                const userId = req.user.sub as string;

                const connection = await getConnection('default');
                const userRepository = connection.getRepository(UserEntity);
                const user = await userRepository.findOne({
                    where: {
                        externalId: userId,
                    },
                    select: ['id'],
                    relations: ['roles'],
                });
                if (user && user.roles) {
                    roles = user.roles.map((role) => role.code);
                }

                req.user.roles = roles;
            })()
                .then(() => next())
                .catch((e) => {
                    // console.error(e);
                    res.status(500).send({
                        message: '',
                    });
                });
        });
    }
}
