import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Props } from './type';
import { metaData } from '../../metadata';

export const SEO: FunctionComponent<Props> = ({
    description = '',
    lang = 'en',
    meta = [],
    keywords = [],
    title = '',
    image = '',
}) => {
    const metaDescription = description || metaData.description;

    let allKeywords: string[] = [];
    if (typeof keywords === 'string') {
        allKeywords = allKeywords.concat(
            keywords.split(',').map((word) => word.trim()),
        );
    }
    allKeywords = allKeywords.concat(metaData.keywords).filter((x) => !!x);

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${metaData.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
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
                .filter((x) => !!x)}
        />
    );
};
