import React, { FunctionComponent } from 'react';

import { Container, PageOffset } from '../components';
import { PageLayout } from '../components/PageLayout';
// import { graphql } from 'gatsby';

type JSPagePropsType = {
    data: any;
};

const JSPage: FunctionComponent<JSPagePropsType> = () => {
    return (
        <PageLayout
            title="JS Page"
            keywords="one, two"
            description="JS Page description"
        >
            <Container>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Container>
            <PageOffset />
        </PageLayout>
    );
};

// export const pageQuery = graphql`
//     query HomePageQuery {
//     }
// `;

export default JSPage;
