import { HTMLAttributes } from 'react';
import { FluidObject } from 'gatsby-image';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

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
