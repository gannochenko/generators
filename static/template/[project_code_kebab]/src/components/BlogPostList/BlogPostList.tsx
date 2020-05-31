import React, { FunctionComponent } from 'react';

import { BlogPostCard } from '../BlogPostCard';
import { BlogPostListContainer, LinkContainer, Posts } from './style';
import { Props } from './type';
import { Link } from '../Link';
import { Effect } from '@gannochenko/ui';

export const BlogPostList: FunctionComponent<Props> = ({
    data,
    showLink,
    drafts,
}) => {
    return (
        <BlogPostListContainer>
            <Posts>
                {data.map((item, index) => {
                    const card = (
                        <BlogPostCard key={item.node.id} data={item.node} />
                    );

                    if (index > 0) {
                        return (
                            <Effect key={item.node.id} name="fade-slide-bottom">
                                {card}
                            </Effect>
                        );
                    }

                    return card;
                })}
            </Posts>
            {!!showLink && (
                <Effect>
                    <LinkContainer>
                        <Link to={drafts ? '/blog-drafts' : '/blog'}>
                            See all posts &rarr;
                        </Link>
                    </LinkContainer>
                </Effect>
            )}
        </BlogPostListContainer>
    );
};
