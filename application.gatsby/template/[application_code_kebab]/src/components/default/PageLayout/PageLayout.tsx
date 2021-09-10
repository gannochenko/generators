import React, { FC } from 'react';
import { PageLayoutContent } from './style';
import { PageLayoutPropsType } from './type';
import { Container, SEO } from '../../index';
import { Typography } from '../Typography';

/**
 * This is a page-level layout. It goes inside of the ApplicationLayout and
 * defines a common structure of each page of the project.
 */
export const PageLayout: FC<PageLayoutPropsType> = (props) => {
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
        displayPageTitle: displayPageTitleProp,
    } = props;

    const actualTitle = title || titleProp;
    const actualKeywords = keywords || keywordsProp;
    const actualDescription = description || descriptionProp;

    // const isRoot = pathname === '/';
    const reallyDisplayTitle =
        displayPageTitleProp === undefined
            ? displayPageTitle !== false
            : displayPageTitleProp;
    const displayTitle = actualTitle && reallyDisplayTitle;

    let coverImage = '';
    if (images) {
        const coverImageData = images[0];
        if (coverImageData?.image) {
            if (typeof coverImageData?.image === 'string') {
                coverImage = coverImageData?.image;
            } else if (coverImageData?.image.childImageSharp) {
                // @ts-ignore
                coverImage = coverImageData?.image.childImageSharp.fluid.src;
            }
        }
    }

    return (
        <>
            <SEO
                title={actualTitle}
                keywords={actualKeywords}
                description={actualDescription}
                image={coverImage ?? '/assets/icon.jpg'}
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
