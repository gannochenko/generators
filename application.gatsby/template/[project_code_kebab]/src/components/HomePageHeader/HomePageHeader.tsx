import React, { forwardRef, FC } from 'react';

import { HomePageHeaderPropsType } from './type';
import {
    HomePageHeaderRoot,
    HomePageHeaderBackgroundImage,
    HomePageHeaderFadeAway,
    HomePageHeaderContainer,
    HomePageHeaderTitle,
    HomePageHeaderSub,
} from './style';
import { useHomePageHeader } from './hooks/useHomePageHeader';
import { HomePageHeaderQuery } from './HomePageHeaderQuery';
import { site } from '../../meta/site';

const { title, description } = site;

export const HomePageHeader: FC<HomePageHeaderPropsType> = forwardRef(
    function HomePageHeader(props, ref) {
        const { rootProps } = useHomePageHeader(ref, props);

        return (
            <HomePageHeaderQuery>
                {(data) => (
                    <HomePageHeaderRoot {...rootProps}>
                        <HomePageHeaderBackgroundImage
                            image={data.backgroundImage.childImageSharp.gatsbyImageData}
                            alt="Header image"
                        />
                        <HomePageHeaderFadeAway>
                            <HomePageHeaderContainer>
                                <HomePageHeaderTitle>
                                    {title}
                                </HomePageHeaderTitle>
                                <HomePageHeaderSub>
                                    {description}
                                </HomePageHeaderSub>
                            </HomePageHeaderContainer>
                        </HomePageHeaderFadeAway>
                    </HomePageHeaderRoot>
                )}
            </HomePageHeaderQuery>
        );
    },
);

HomePageHeader.defaultProps = {};
