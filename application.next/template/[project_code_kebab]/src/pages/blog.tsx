import { ReactNode } from 'react';
import Head from 'next/head';
import { Button as MUIButton } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { Layout, Container, Title } from '../components';
import { PageType } from '../type';

const BlogPage: PageType = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <Container>
                <Title>This is a blog page</Title>

                <MUIButton color="primary" variant="contained">
                    Read me
                </MUIButton>
            </Container>
        </>
    );
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
BlogPage.renderLayout = renderBlogLayout;

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        props: {}, // will be passed to the page component as props
    };
};
