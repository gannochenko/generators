import { useCallback, ForwardedRef } from 'react';
import animateScrollTo from 'animated-scroll-to';
import { PageHeaderPropsType } from '../type';
import { HEADER_HEIGHT } from '../constants';

export const usePageHeader = (
    ref: ForwardedRef<HTMLDivElement>,
    props: PageHeaderPropsType,
) => {
    const {
        image,
        imageAlt,
        imageAuthor,
        imageSource,
        imageSourceString,
        imageOverlayOpacity,
        containerMaxWidth,
        children,
    } = props;

    const scrollWindow = useCallback(() => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();
            animateScrollTo(
                dataRect.top +
                    dataRect.height +
                    windowScrollTop -
                    HEADER_HEIGHT,
                {
                    speed: 1000,
                },
            );
        }
    }, []);

    const timeoutBase = 0;
    const timeoutArrow = timeoutBase + 1200;

    return {
        children,
        rootProps: {
            ref,
        },
        arrowProps: {
            onClick: () => scrollWindow(),
            effectTimeout: timeoutArrow,
        },
        imageProps: {
            image,
            alt: imageAlt ?? '',
        },
        imageOverlayProps: {
            opacity: imageOverlayOpacity ?? 0.6,
        },
        copyrightProps: {
            author: imageAuthor,
            source: imageSource,
            sourceText: imageSourceString,
        },
        dataProps: {
            maxWidth: containerMaxWidth,
        },
        showImage: !!image,
    };
};
