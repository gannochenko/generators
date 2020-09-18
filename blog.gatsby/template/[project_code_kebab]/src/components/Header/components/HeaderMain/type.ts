import { FluidObject } from 'gatsby-image';

export interface Props {
    backgroundImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    inner?: boolean;
}
