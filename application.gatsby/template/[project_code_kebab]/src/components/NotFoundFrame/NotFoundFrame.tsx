import React, { FunctionComponent } from 'react';

import {
    NotFoundFrameRoot,
    Image,
    Message,
    Code,
    Explanation,
    Left,
} from './style';
import { NotFoundFramePropsType } from './type';
import { Link } from '../Link';
import { Copyright } from '../Copyright';

export const NotFoundFrame: FunctionComponent<NotFoundFramePropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <NotFoundFrameRoot {...restProps}>
            <Left>
                <Image />
                <Copyright
                    author="Zeynep"
                    source="https://unsplash.com/@zeynep_e"
                    sourceText="Unsplash"
                />
            </Left>
            <Message>
                <Code>404</Code>
                <Explanation>
                    Not found. <Link to="/">Visit home page</Link>.
                </Explanation>
            </Message>
        </NotFoundFrameRoot>
    );
};
