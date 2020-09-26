import { ReactNode } from 'react';
import Head from 'next/head';
import { Layout, Container, Title } from '../components';
import { PageType } from '../type';

const Custom404Page: PageType = () => {
    return (
        <>
            <Head>
                <title>404 &mdash; Not found</title>
            </Head>

            <Container>
                <Title>404 - Page Not Found</Title>
            </Container>
        </>
    );
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
Custom404Page.renderLayout = renderBlogLayout;

export default Custom404Page;
