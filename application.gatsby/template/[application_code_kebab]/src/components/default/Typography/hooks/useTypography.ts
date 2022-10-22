import { useMemo } from 'react';
import { TypographyPropsType } from '../type';

export const useTypography = ({
    children,
    ...restProps
}: TypographyPropsType) => {
    const trueChildren = useMemo(() => {
        if (typeof children !== 'string') {
            return children;
        }

        return children.replace('{a}', '').trim();
    }, [children]);

    const aKey = useMemo(() => {
        if (!children || typeof children !== 'string') {
            return '';
        }

        if (children.toString().indexOf('{a}') < 0) {
            return '';
        }

        return children
            .toString()
            .replace('{a}', '')
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9_-]/g, '');
    }, [children]);

    return {
        restProps,
        trueChildren,
        aKey,
    };
};
