import React, { FunctionComponent } from 'react';

import {
    BlogPostCardRoot,
    Preview,
    ViewPost,
    Title,
    Date,
    TitleLink,
} from './style';
import { Props } from './type';
import { formatDate } from '../../lib/util';

export const BlogPostCard: FunctionComponent<Props> = ({ data }) => {
    const {
        frontmatter: {
            path = '',
            preview,
            description,
            date,
            title,
            published,
        },
    } = data;

    const realPath = published
        ? path
        : path.replace(/^\/blog\//, '/blog-drafts/');

    return (
        <BlogPostCardRoot>
            <Title>
                <Date>{formatDate(date)}</Date>
                <TitleLink to={realPath}>{title}</TitleLink>
            </Title>

            <Preview to={realPath}>{preview || description}</Preview>

            <ViewPost to={realPath} fontSize="small">
                Read the post
            </ViewPost>
        </BlogPostCardRoot>
    );
};
