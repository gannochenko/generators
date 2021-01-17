import { ObjectLiteralType } from '../type';

export const getPropBlocker = (customProps?: ObjectLiteralType<boolean>) => ({
    shouldForwardProp: (prop: string) =>
        customProps ? customProps && !(prop in customProps) : true,
});
