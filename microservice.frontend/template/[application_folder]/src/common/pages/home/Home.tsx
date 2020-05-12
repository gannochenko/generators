import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { RendererType, withNotification } from '@gannochenko/ui';
import { withClient, usePage } from '../../lib';

import { Container, Layout, Link } from '../../components';

import { HomePagePropsType, HomePagePropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';
import { SEO } from '../../components/SEO';

const HomePageComponent: FunctionComponent<HomePagePropsType> = (props) => {
    const { notify } = props;
    usePage(props);

    return (
        <>
            <SEO title="Home" />
            <Container>
                <Link to="/page2">Page 2</Link>
                <br />
                <Link to="/missing-page">Missing page</Link>
                <br />
                <Link to="/403">Forbidden page</Link>
                <br />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        notify({ text: 'MESSAGE!' });
                    }}
                >
                    Test message
                </Button>
            </Container>

            <Container>
                <h2>What is Lorem Ipsum?</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>

                <h2>Why do we use it?</h2>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &apos;Content here, content here&apos;, making it look
                    like readable English. Many desktop publishing packages and
                    web page editors now use Lorem Ipsum as their default model
                    text, and a search for &apos;lorem ipsum&apos; will uncover
                    many web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like).
                </p>

                <h2>Where does it come from?</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of &apos;de Finibus Bonorum et
                    Malorum&apos; (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line
                    of Lorem Ipsum, &apos;Lorem ipsum dolor sit amet..&apos;,
                    comes from a line in section 1.10.32.
                </p>

                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from &apos;de Finibus Bonorum et Malorum&apos; by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                </p>

                <h2>Where can I get some?</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there
                    isn&apos;t anything embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </p>
            </Container>
        </>
    );
};

export const HomePage = withNotification<HomePagePropsAlt>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.home,
            mapDispatchToProps,
        )(HomePageComponent),
    ),
);

export const HomePageRenderer: RendererType = () => (
    <Layout>
        <HomePage />
    </Layout>
);
