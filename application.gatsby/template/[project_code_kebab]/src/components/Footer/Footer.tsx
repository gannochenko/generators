import React, { FunctionComponent } from 'react';
import {
    Container,
    Info,
    NoWrap,
} from './style';
import { Link } from '../Link';

export const Footer: FunctionComponent = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; then &mdash; now</NoWrap>
                <Link to="/cookie-policy" bright>
                    Cookie policy
                </Link>
            </Info>
        </Container>
    );
};
