/* eslint-disable react/display-name */

import React from 'react';
import { Container } from '../Container';
import { Typography } from '../Typography';
import { Link } from '../Link';
<% if (use_blog) { %>
import { Listing } from '../Listing';
<% } %>
import { HR } from '../HR';
import { ObjectLiteral } from '../../type';

const margins = { marginTop: '2rem', marginBottom: '2rem' };

export const markdownComponents = {
    a: Link,
    p: (props: ObjectLiteral) => (
        <Container>
            <p {...props} style={margins} />
        </Container>
    ),
    h2: (props: ObjectLiteral) => (
        <Container>
            <Typography h2 {...props} />
        </Container>
    ),
    h3: (props: ObjectLiteral) => (
        <Container>
            <Typography h3 {...props} />
        </Container>
    ),
    h4: (props: ObjectLiteral) => (
        <Container>
            <Typography h3 {...props} />
        </Container>
    ),
    ul: (props: ObjectLiteral) => (
        <Container>
            <ul {...props} />
        </Container>
    ),
    ol: (props: ObjectLiteral) => (
        <Container>
            <ol {...props} />
        </Container>
    ),
    hr: () => <HR />,
<% if (use_blog) { %>
    pre: Listing,
<% } %> ,
};
