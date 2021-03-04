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
        <Typography
            {...props}
            variant="body1"
            component="p"
            enableVerticalGutter
        />
    ),
    h1: (props: ObjectLiteralType) => (
        <Typography
            {...props}
            variant="h1"
            component="h1"
            enableVerticalGutter
        />
    ),
    h2: (props: ObjectLiteralType) => (
        <Typography
            {...props}
            variant="h2"
            component="h2"
            enableVerticalGutter
        />
    ),
    h3: (props: ObjectLiteralType) => (
        <Typography
            {...props}
            variant="h3"
            component="h3"
            enableVerticalGutter
        />
    ),
    h4: (props: ObjectLiteralType) => (
        <Typography
            {...props}
            variant="h4"
            component="h4"
            enableVerticalGutter
        />
    ),
    hr: () => <HR />,
};
