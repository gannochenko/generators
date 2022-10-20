import { HTMLAttributes } from 'react';
import { FluidObject } from 'gatsby-image';

export type HeaderPropsType = Partial<{
    // custom props here

    backgroundImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    inner: boolean;
}> &
    HTMLAttributes<HTMLElement>;
