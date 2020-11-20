import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';

import { Props } from './type';
import { Menu } from '../../../Menu';
import {
    HeaderMainContainer,
    Arrow,
    BackgroundImage,
    Data,
    DataColumn,
    GreetingBlock,
    HelloBlock,
    HelloLeft,
    HelloRight,
    ImageOverlay,
    NameBlock,
    SocialBar,
    MenuOffset,
} from './style';
import { Avatar } from '../../../Avatar';
import { Social } from '../../../Social';
import { Copyright } from '../../../Copyright';
import { links } from '../../../../lib/links';

export const HeaderMain: FunctionComponent<Props> = ({
    backgroundImage,
    inner,
}) => {
    const scrollWindow = () => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();
            animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
                speed: 1000,
            });
        }
    };

    const timeoutBase = 500;
    const timeoutRight = timeoutBase + 200;
    const timeoutArrow = timeoutRight + 1000;

    return (
        <>
            <HeaderMainContainer>
                {!inner && (
                    <>
                        <BackgroundImage
                            sizes={backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data className="intro-data">
                            <DataColumn>
                                <HelloBlock>
                                    <HelloLeft
                                        effectName="fade-enter"
                                        effectTimeout={timeoutBase}
                                        effectEaseA="preset:bounce"
                                    >
                                        <Avatar />
                                    </HelloLeft>
                                    <HelloRight>
                                        <NameBlock
                                            effectName="fade-slide-bottom"
                                            effectTimeout={timeoutRight}
                                            effectEaseA="preset:bounce"
                                        >
                                            <%- author_name %>
                                        </NameBlock>
                                        <GreetingBlock
                                            effectName="fade-slide-bottom"
                                            effectTimeout={timeoutRight + 300}
                                            effectEaseA="preset:bounce"
                                        >
                                            Fullstack software engineer in
                                            JS/JS,
                                            <br />
                                            open-source contributor, in ❤️ with
                                            tech
                                        </GreetingBlock>
                                        <SocialBar
                                            effectName="fade-slide-bottom"
                                            effectTimeout={timeoutRight + 600}
                                            effectEaseA="preset:bounce"
                                        >
                                            <Social
                                                type="github"
                                                src={links.github}
                                            />
                                            <Social>
                                                type="linkedin"
                                                src={links.linkedin}
                                            />
                                            <Social
                                                type="medium"
                                                src={links.medium}
                                            />
                                            <Social
                                                type="twitter"
                                                src={links.twitter}
                                            />
                                            <Social
                                                type="instagram"
                                                src={links.instagram}
                                            />
                                        </SocialBar>
                                    </HelloRight>
                                </HelloBlock>
                            </DataColumn>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutArrow}
                            onClick={() => scrollWindow()}
                        />
                    </>
                )}
                {inner && <MenuOffset />}
                <Menu />
            </HeaderMainContainer>
            {!inner && (
                <Copyright
                    author="Caspar Camille Rubin"
                    source="https://unsplash.com/photos/fPkvU7RDmCo"
                    sourceText="Unsplash"
                />
            )}
        </>
    );
};
