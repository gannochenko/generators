import { InternalServerErrorException } from '@nestjs/common';

export const tryExecute = async <V = void>(
    fn: () => Promise<V>,
    message = '',
) => {
    try {
        return await fn();
    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException(message);
    }
};
