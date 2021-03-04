import React, { FC } from 'react';
import { BodyLayoutContent, BodyLayoutBackLink } from './style';
import { BodyLayoutPropsType } from './type';
import { Container, SEO } from '../';
import { Typography } from '../Typography';

export const PageContentLayout: FC<BodyLayoutPropsType> = (props) => {
    const {
        children,
        // location: { pathname = '' } = {},
        pageContext: {
            frontmatter: {
                title = '',
                keywords = [],
                description = '',
                backUrl = '',
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
        const coverImageData = images.find((image: any) => image.is_cover);
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
                image={coverImage ? coverImage : '/assets/avatar.jpg'}
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
            <BodyLayoutContent>
                {children}
                {!!backUrl && (
                    <BodyLayoutBackLink to={backUrl}>
                        &larr; Go back
                    </BodyLayoutBackLink>
                )}
            </BodyLayoutContent>
        </>
    );
};

export default PageContentLayout;
