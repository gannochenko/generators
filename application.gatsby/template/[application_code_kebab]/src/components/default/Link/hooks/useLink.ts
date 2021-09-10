import { LinkPropsType } from '../type';

export const useLink = ({ to, href, target, ...props }: LinkPropsType) => {

    const link = to || href || '';
    const newTab = (!link.startsWith('/') && !link.startsWith('?')) || target === '_blank';

    let rootProps = {
        ...props,
    };

    if (newTab) {
        rootProps = {
            ...rootProps,
            href: link,
            target: target ?? '_blank',
        };
    } else {
        rootProps = {
            ...rootProps,
            to: link,
            target,
        };
    }

    return {
        rootProps,
        newTab,
    };
};
