import { LinkPropsType } from '../type';

export const useLink = ({ to, href, target, ...props }: LinkPropsType) => {
    const link = to || href || '';
    const newTab =
        (!link.startsWith('/') && !link.startsWith('?')) || target === '_blank';

    return {
        props,
        newTab,
        getLinkProps: () => {
            return {
                ...props,
                href: link,
                target: target ?? '_blank',
            };
        },
        getGatsbyLinkProps: () => {
            return {
                ...props,
                to: link,
                target,
            };
        },
    };
};
