import { FunctionComponent } from 'react';
import RouterLink from 'next/link';
import { LinkRoot } from './style';
import { LinkPropsType } from './type';

export const Link: FunctionComponent<LinkPropsType> = ({
    href,
    children,
    classNames,
    ...restProps
}) => {
    const link = href || '';

    return (
        <LinkRoot classNames={classNames}>
            {(className) => {
                if (typeof link === 'string' && !link.startsWith('/')) {
                    return (
                        <a
                            {...restProps}
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={className}
                        >
                            {children}
                        </a>
                    );
                }

                return (
                    <RouterLink href={href}>
                        <a {...restProps} className={className}>
                            {children}
                        </a>
                    </RouterLink>
                );
            }}
        </LinkRoot>
    );
};
