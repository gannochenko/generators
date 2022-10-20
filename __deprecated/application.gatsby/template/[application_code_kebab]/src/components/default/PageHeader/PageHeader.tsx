import React, { forwardRef } from 'react';

import { PageHeaderPropsType } from './type';
import {
    PageHeaderRoot,
    PageHeaderMainContainer,
    Arrow,
    BackgroundImage,
    PageHeaderData,
    ImageOverlay,
} from './style';
import { usePageHeader } from './hooks/usePageHeader';
import { Copyright } from '../Copyright';

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderPropsType>(
    function HomePageHeader(props, ref) {
        const {
            children,
            rootProps,
            arrowProps,
            imageProps,
            copyrightProps,
            imageOverlayProps,
            dataProps,
            showImage,
        } = usePageHeader(ref, props);

        return (
            <PageHeaderRoot {...rootProps}>
                <PageHeaderMainContainer>
                    {/* @ts-ignore */}
                    {showImage && <BackgroundImage {...imageProps} />}
                    <ImageOverlay {...imageOverlayProps} />
                    <PageHeaderData {...dataProps} className="intro-data">
                        {children}
                    </PageHeaderData>
                    <Arrow {...arrowProps} />
                </PageHeaderMainContainer>
                <Copyright {...copyrightProps} />
            </PageHeaderRoot>
        );
    },
);

PageHeader.defaultProps = {
    imageOverlayOpacity: 0.6,
    containerMaxWidth: '960px',
};
