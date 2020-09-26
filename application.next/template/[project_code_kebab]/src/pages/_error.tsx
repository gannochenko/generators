import { ReactNode } from 'react';
import Head from 'next/head';
import { Layout, Container, Title } from '../components';
import { PageType } from '../type';

const ErrorPage: PageType<{ statusCode?: number }> = ({ statusCode }) => {
    return (
        <>
            <Head>
                <title>{statusCode} &mdas; Error</title>
            </Head>

            <Container>
                <Title>
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </Title>
            </Container>
        </>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    let statusCode: number | undefined = 404;
    if (res) {
        statusCode = res.statusCode;
    } else if (err) {
        statusCode = err.statusCode;
    }

    return { statusCode };
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
ErrorPage.renderLayout = renderBlogLayout;

export default ErrorPage;
