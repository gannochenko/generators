import React, { FunctionComponent } from 'react';

import {
    NotFoundFrameRoot,
    Image,
    Message,
    Code,
    Explanation,
    Left,
} from './style';
import { ErrorPagePropsType } from './type';
import { Link } from '../Link';
import { Copyright } from '../Copyright';

export const ErrorPage: FunctionComponent<ErrorPagePropsType> = ({
    image,
    imageAuthor,
    imageSource,
    imageSourceText,
    code,
    message,
    ...restProps
}) => {
    return (
        <NotFoundFrameRoot {...restProps}>
            <Left>
                <Image image={image} />
                <Copyright
                    author={imageAuthor}
                    source={imageSource}
                    sourceText={imageSourceText}
                />
            </Left>
            <Message>
                <Code>{code}</Code>
                <Explanation>
                    {message}
                    <br />
                    <Link to="/">Go home</Link>.
                </Explanation>
            </Message>
        </NotFoundFrameRoot>
    );
};
