import { PageLayoutPropsType } from '../type';

export const usePageLayout = ({
    pageContext,
    title: titleProp = '',
    keywords: keywordsProp = [],
    description: descriptionProp = '',
    displayPageTitle: displayPageTitleProp,
    children,
}: PageLayoutPropsType) => {
    const frontMatter = pageContext?.frontmatter;

    const actualTitle = frontMatter?.title ?? titleProp;
    const actualKeywords = frontMatter?.keywords ?? keywordsProp;
    const actualDescription = frontMatter?.description ?? descriptionProp;
    const displayPageTitle = frontMatter?.displayPageTitle ?? true;
    const images = frontMatter?.images ?? [];

    const reallyDisplayTitle =
        displayPageTitleProp === undefined
            ? displayPageTitle !== false
            : displayPageTitleProp;
    const showTitle = actualTitle && reallyDisplayTitle;

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

    return {
        seoProps: {
            title: actualTitle,
            keywords: actualKeywords,
            description: actualDescription,
            image: coverImage ?? '/assets/icon.jpg',
        },
        showTitle,
        title: actualTitle,
        children,
    };
};
