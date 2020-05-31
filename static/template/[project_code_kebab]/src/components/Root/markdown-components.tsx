import React from 'react';
import { Container } from '../Container';
import { Typography } from '../Typography';
import { Link } from '../Link';
import { Listing } from '../Listing';
import { HR } from '../HR';

const margins = { marginTop: '2rem', marginBottom: '2rem' };

export const markdownComponents = {
    a: Link,
    p: (props: any) => (
        <Container>
            <p {...props} style={margins} />
        </Container>
    ),
    h2: (props: any) => (
        <Container>
            <Typography h2 showAnchor {...props} />
        </Container>
    ),
    h3: (props: any) => (
        <Container>
            <Typography h3 showAnchor {...props} />
        </Container>
    ),
    h4: (props: any) => (
        <Container>
            <Typography h3 showAnchor {...props} />
        </Container>
    ),
    ul: (props: any) => (
        <Container>
            <ul {...props} />
        </Container>
    ),
    ol: (props: any) => (
        <Container>
            <ol {...props} />
        </Container>
    ),
    hr: (props: any) => <HR />,
    pre: Listing,
};
