/* eslint-disable react/display-name */

import React from 'react';
import { ObjectLiteralType } from '@gannochenko/ui.styled-components';

import { Container } from '../Container';
import { Typography } from '../Typography';
import { Link } from '../Link';
import { HR } from '../HR';

export const markdownComponents = {
    a: Link,
    p: (props: ObjectLiteralType) => (
        <Container>
            <Typography
                {...props}
                variant="body1"
                component="p"
                enableVerticalGutter
            />
        </Container>
    ),
    h1: (props: ObjectLiteralType) => (
        <Container>
            <Typography
                {...props}
                variant="h1"
                component="h1"
                enableVerticalGutter
            />
        </Container>
    ),
    h2: (props: ObjectLiteralType) => (
        <Container>
            <Typography
                {...props}
                variant="h2"
                component="h2"
                enableVerticalGutter
            />
        </Container>
    ),
    h3: (props: ObjectLiteralType) => (
        <Container>
            <Typography
                {...props}
                variant="h3"
                component="h3"
                enableVerticalGutter
            />
        </Container>
    ),
    h4: (props: ObjectLiteralType) => (
        <Container>
            <Typography
                {...props}
                variant="h4"
                component="h4"
                enableVerticalGutter
            />
        </Container>
    ),
    ul: (props: ObjectLiteralType) => (
        <Container>
            <ul {...props} />
        </Container>
    ),
    ol: (props: ObjectLiteralType) => (
        <Container>
            <ol {...props} />
        </Container>
    ),
    hr: () => <HR />,
};
