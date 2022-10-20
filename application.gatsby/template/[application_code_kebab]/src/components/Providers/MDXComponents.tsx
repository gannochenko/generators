import React from 'react';
import { Typography, Link, HR, InlineCode } from '../default';

// const wrap = (children: ReactNode) => <Container>{children}</Container>;

const Paragraph = (props: Record<string, any>) => (
    <Typography {...props} variant="body1" component="p" enableVerticalGutter />
);

const H1 = (props: Record<string, any>) => (
    <Typography {...props} variant="h1" component="h1" enableVerticalGutter />
);

const H2 = (props: Record<string, any>) => (
    <Typography {...props} variant="h2" component="h2" enableVerticalGutter />
);

const H3 = (props: Record<string, any>) => (
    <Typography {...props} variant="h3" component="h3" enableVerticalGutter />
);

const H4 = (props: Record<string, any>) => (
    <Typography {...props} variant="h4" component="h4" enableVerticalGutter />
);

const PageSeparator = () => <HR />;

export const MDXComponents = {
    a: Link,
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    hr: PageSeparator,
    // pre: Listing,
    inlineCode: InlineCode,
};
