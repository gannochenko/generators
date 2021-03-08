import React, { forwardRef, FC } from 'react';

import { MainHeaderPropsType } from './type';
import {
    MainHeaderRoot,
    MainHeaderFadeAway,
    MainHeaderContainer,
    MainHeaderTitle,
    MainHeaderSub,
} from './style';
import { useMainHeader } from './hooks/useMainHeader';
import { siteMeta } from '../../siteMeta';

export const MainHeader: FC<MainHeaderPropsType> = forwardRef(
    function MainHeader(props, ref) {
        const { rootProps } = useMainHeader(ref, props);

        return (
            <MainHeaderRoot {...rootProps}>
                <MainHeaderFadeAway>
                    <MainHeaderContainer>
                        <MainHeaderTitle>
                            {siteMeta.title}
                        </MainHeaderTitle>
                        <MainHeaderSub>
                            Application slogan goes here
                        </MainHeaderSub>
                    </MainHeaderContainer>
                </MainHeaderFadeAway>
            </MainHeaderRoot>
        );
    },
);

MainHeader.defaultProps = {};
