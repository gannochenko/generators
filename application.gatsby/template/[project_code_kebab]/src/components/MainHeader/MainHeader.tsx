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

const { title, description } = siteMeta;

export const MainHeader: FC<MainHeaderPropsType> = forwardRef(
    function MainHeader(props, ref) {
        const { rootProps } = useMainHeader(ref, props);

        return (
            <MainHeaderRoot {...rootProps}>
                <MainHeaderFadeAway>
                    <MainHeaderContainer>
                        <MainHeaderTitle>
                            {title}
                        </MainHeaderTitle>
                        <MainHeaderSub>
                            {description}
                        </MainHeaderSub>
                    </MainHeaderContainer>
                </MainHeaderFadeAway>
            </MainHeaderRoot>
        );
    },
);

MainHeader.defaultProps = {};
