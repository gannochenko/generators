import React, { FC } from 'react';

import { NotFoundRoot, Message, Code, Explanation } from './style';
import { NotFoundFramePropsType } from './type';
import { Link } from '../Link';

export const NotFound: FC<NotFoundFramePropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <NotFoundRoot {...restProps}>
            <Message>
                <Code>404</Code>
                <Explanation>
                    Not found. <Link to="/">Visit home page</Link>.
                </Explanation>
            </Message>
        </NotFoundRoot>
    );
};
