import React, { FC } from 'react';
import { PageLayoutRoot } from './style';
import { PageLayoutPropsType } from './type';
import { Container, SEO } from '../../index';
import { Typography } from '../Typography';
import { usePageLayout } from './hooks/usePageLayout';

export const PageLayout: FC<PageLayoutPropsType> = (props) => {
    const { seoProps, showTitle, title, children } = usePageLayout(props);

    return (
        <PageLayoutRoot>
            <SEO {...seoProps} />
            {showTitle && (
                <Typography variant="h1" component="h1" enableVerticalGutter>
                    <Container>{title}</Container>
                </Typography>
            )}
            {children}
        </PageLayoutRoot>
    );
};

export default PageLayout;
