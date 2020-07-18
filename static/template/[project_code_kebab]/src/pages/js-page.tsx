import React, { FunctionComponent } from 'react';
import { Container, Typography, SEO } from '../components';
// import { graphql } from 'gatsby';

type JSPagePropsType = {
    data: any;
};

const JSPage: FunctionComponent<JSPagePropsType> = ({ data }) => {
    return (
        <Container>
            <SEO
                title="JS Page"
                description="JS Page description"
                keywords="one, two"
            />
            <Typography>Lala</Typography>
            111
        </Container>
    );
};

// export const pageQuery = graphql`
//     query HomePageQuery {
//     }
// `;

export default JSPage;
