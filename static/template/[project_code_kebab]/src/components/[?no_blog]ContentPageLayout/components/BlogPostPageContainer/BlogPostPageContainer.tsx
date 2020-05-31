import React, { FunctionComponent } from 'react';

import { BlogPostPageContainerContainer } from './style';
import { Props } from './type';

export const BlogPostPageContainer: FunctionComponent<Props> = ({
    children,
}) => {
    return (
        <BlogPostPageContainerContainer>
            {children}
        </BlogPostPageContainerContainer>
    );
};
