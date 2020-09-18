import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Props } from './type';
import { Query } from './query';

export const SEO: FunctionComponent<Props> = ({
    description = '',
    lang = 'en',
    meta = [],
    keywords = [],
    title = '',
    image = '',
}) => {
    return (
        <Query>
            {data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;

                let allKeywords: string[] = [];
                if (typeof keywords === 'string') {
                    allKeywords = allKeywords.concat(
                        keywords.split(',').map(word => word.trim()),
                    );
                }
                allKeywords = allKeywords
                    .concat(data.site.siteMetadata.keywords)
                    .filter(x => !!x);

                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: 'twitter:card',
                                content: 'summary',
                            },
                            {
                                name: 'twitter:creator',
                                content: '@<%- github_account_name %>',
                            },
                            {
                                name: 'description',
                                content: metaDescription,
                            },
                            {
                                property: 'og:title',
                                content: title,
                            },
                            {
                                property: 'og:description',
                                content: metaDescription,
                            },
                            {
                                property: 'og:type',
                                content: 'website',
                            },
                            image
                                ? {
                                      property: 'og:image',
                                      content: image,
                                  }
                                : {},
                        ]
                            .concat(
                                allKeywords.length > 0
                                    ? [
                                          {
                                              name: `keywords`,
                                              content: allKeywords.join(`, `),
                                          },
                                      ]
                                    : [],
                            )
                            .concat(meta)
                            .filter(x => !!x)}
                    />
                );
            }}
        </Query>
    );
};
