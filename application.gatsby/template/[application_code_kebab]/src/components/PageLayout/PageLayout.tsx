import React, { FC } from 'react';
import { PageLayoutContent } from './style';
import { BodyLayoutPropsType } from './type';
import { Container, SEO } from '../';
import { Typography } from '../Typography';

/**
 * This is a page-level layout. It goes inside of the ApplicationLayout and
 * defines a common structure of each page of the project.
 */
export const PageLayout: FC<BodyLayoutPropsType> = (props) => {
    const {
        children,
        // location: { pathname = '' } = {},
        pageContext: {
            frontmatter: {
                title = '',
                keywords = [],
                description = '',
                images = [],
                displayPageTitle = true,
            } = {},
        } = {},
        title: titleProp = '',
        keywords: keywordsProp = [],
        description: descriptionProp = '',
    } = props;

    const actualTitle = title || titleProp;
    const actualKeywords = keywords || keywordsProp;
    const actualDescription = description || descriptionProp;

    // const isRoot = pathname === '/';
    const displayTitle = actualTitle && displayPageTitle !== false;

    let coverImage = '';
    if (images) {
        const coverImageData = images[0];
        if (coverImageData && coverImageData.image) {
            if (typeof coverImageData.image === 'string') {
                coverImage = coverImageData.image;
            } else if (coverImageData.image.childImageSharp) {
                coverImage = coverImageData.image.childImageSharp.fluid.src;
            }
        }
    }

    return (
        <>
            <SEO
                title={actualTitle}
                keywords={actualKeywords}
                description={actualDescription}
                image={coverImage ? coverImage : '/assets/icon.jpg'}
            />
            {displayTitle && (
                <Container>
                    <Typography
                        variant="h1"
                        component="h1"
                        enableVerticalGutter
                    >
                        {actualTitle}
                    </Typography>
                </Container>
            )}
            <PageLayoutContent>{children}</PageLayoutContent>
        </>
    );
};

export default PageLayout;
