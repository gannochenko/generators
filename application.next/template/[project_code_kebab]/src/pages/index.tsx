import { ReactNode } from 'react';
import Head from 'next/head';
import { Button } from '@material-ui/core';
import { PageType } from '../type';
import { Title, Link, Container, Layout, Paragraph } from '../components';

const HomePage: PageType = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Container>
                <Title>This project works on Next.js!</Title>
                <Button color="primary" variant="contained">
                    Buy me a beer
                </Button>

                <Paragraph>
                    <Link href="https://www.lipsum.com/">Lorem Ipsum</Link> is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </Paragraph>
            </Container>
        </>
    );
};

const renderHomeLayout = (children: ReactNode) => <Layout>{children}</Layout>;
HomePage.renderLayout = renderHomeLayout;

export default HomePage;
