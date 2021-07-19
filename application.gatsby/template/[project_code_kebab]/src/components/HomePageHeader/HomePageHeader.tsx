import React, { forwardRef, FC } from 'react';

import { MainHeaderPropsType } from './type';
import {
    HomePageHeaderRoot,
    HomePageHeaderMainContainer,
    Arrow,
    BackgroundImage,
    Data,
    DataColumn,
    ImageOverlay,
    HomePageHeaderTitle,
    HomePageHeaderSub,
} from './style';
import { useHomePageHeader } from './hooks/useHomePageHeader';
import { HomePageHeaderQuery } from './HomePageHeaderQuery';
import {Copyright} from "../Copyright";
import { site } from '../../meta/site';

const { title, description } = site;

export const HomePageHeader: FC<MainHeaderPropsType> = forwardRef(
    function HomePageHeader(props, ref) {
        const { rootProps, infoProps, arrowProps } = useHomePageHeader(
            ref,
            props,
        );

        return (
            <HomePageHeaderQuery>
                {(data) => (
                    <HomePageHeaderRoot {...rootProps}>
                        <HomePageHeaderMainContainer>
                            <BackgroundImage
                                image={
                                    data.backgroundImage.childImageSharp
                                        .gatsbyImageData
                                }
                                alt="Background image"
                            />
                            <ImageOverlay />
                            <Data className="intro-data">
                                <DataColumn {...infoProps}>
                                    <HomePageHeaderTitle>
                                        {title}
                                    </HomePageHeaderTitle>
                                    <HomePageHeaderSub>
                                        {description}
                                    </HomePageHeaderSub>
                                </DataColumn>
                            </Data>
                            <Arrow {...arrowProps} />
                        </HomePageHeaderMainContainer>
                        <Copyright
                            author="Caspar Camille Rubin"
                            source="https://unsplash.com/photos/fPkvU7RDmCo"
                            sourceText="Unsplash"
                        />
                    </HomePageHeaderRoot>
                )}
            </HomePageHeaderQuery>
        );
    },
);
