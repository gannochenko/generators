import flatten from 'flat';
import { ThemeType } from '../style/type';
import { ObjectLiteralType } from '../type';

const excludedKeys = ['breakpoints', 'overrides', 'mixins', 'props', 'spacing'];

export const makeTokenIndex = (theme: ThemeType) => {
    const result: ObjectLiteralType = {};
    Object.keys(theme).forEach((key) => {
        if (!excludedKeys.includes(key)) {
            result[key] = theme[key];
        }
    });

    return flatten(result) as ObjectLiteralType;
};
