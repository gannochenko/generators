import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const matchRoles = (roles: string[], userRoles: string[]) =>
    roles.filter((value) => userRoles.includes(value)).length > 0;

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>(
            'roles',
            context.getHandler(),
        );

        if (!roles) {
            // no restrictions
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || !user.roles) {
            // no user to check, the guard tells to back off
            return false;
        }

        const userRoles = user.roles as string[];
        if (userRoles.includes('ADMIN')) {
            return true;
        }

        return matchRoles(roles, user.roles);
    }
}
