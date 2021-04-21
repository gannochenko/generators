import { ReactNode } from 'react';
import Head from 'next/head';
import { PageType } from '../../type';
import { Title, Container, Layout } from '../../components';

const BlogPage: PageType = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <Container>
                <Title>This project works on Next.js!</Title>

                Blog
            </Container>
        </>
    );
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
BlogPage.renderLayout = renderBlogLayout;

export default BlogPage;
