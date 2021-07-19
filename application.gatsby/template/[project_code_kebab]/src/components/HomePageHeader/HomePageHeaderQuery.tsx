import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

const query = graphql`
    query HeaderImage {
        backgroundImage: file(relativePath: { eq: "header.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 3000
                    quality: 80
                    placeholder: BLURRED
                )
            }
        }
    }
`;

export const HomePageHeaderQuery: FunctionComponent<QueryProps> = ({
    children,
}) => {
    return <StaticQuery query={query} render={(data) => children(data)} />;
};
