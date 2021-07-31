/* eslint-disable react/display-name */

import React, { ReactNode } from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

import { Typography } from '../Typography';
import { Link } from '../Link';
import { HR } from '../HR';
import { InlineCode } from '../InlineCode';
import { Container } from '../Container';

const wrap = (children: ReactNode) => <Container>{children}</Container>;

const Paragraph = (props: ObjectLiteralType) => (
    <Typography
        {...props}
        variant="body1"
        component="p"
        enableVerticalGutter
    />
);

const Header1 = (props: ObjectLiteralType) => (
    <Typography
        {...props}
        variant="h1"
        component="h1"
        enableVerticalGutter
    />
);

const Header2 = (props: ObjectLiteralType) => (
    <Typography
        {...props}
        variant="h2"
        component="h2"
        enableVerticalGutter
    />
);

const Header3 = (props: ObjectLiteralType) => (
    <Typography
        {...props}
        variant="h3"
        component="h3"
        enableVerticalGutter
    />
);

const Header4 = (props: ObjectLiteralType) => (
    <Typography
        {...props}
        variant="h4"
        component="h4"
        enableVerticalGutter
    />
);

const Separator = () => <HR />;

export const MDXComponents = {
    a: Link,
    p: Paragraph,
    h1: Header1,
    h2: Header2,
    h3: Header3,
    h4: Header4,
    hr: Separator,
    // pre: Listing,
    inlineCode: InlineCode,
};
