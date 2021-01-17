import { HTMLAttributes } from 'react';
import { FluidObject } from 'gatsby-image';
import { ObjectLiteralType } from '../../type';

export type HeaderPropsType = Partial<{
    // custom props here

    backgroundImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    inner: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;
