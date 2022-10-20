import { useCallback, ForwardedRef } from 'react';
import animateScrollTo from 'animated-scroll-to';
import { MainHeaderPropsType } from '../type';
import { HEADER_HEIGHT } from '../constants';

export const useHomePageHeader = (
    ref: ForwardedRef<HTMLDivElement>,
    props: MainHeaderPropsType,
) => {
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
        rootProps: {
            ref,
        },
        infoProps: {
            enableEffects: true,
            effectTimeout: timeoutBase,
        },
        arrowProps: {
            onClick: () => scrollWindow(),
            effectTimeout: timeoutArrow,
        },
    };
};
