import React, { FunctionComponent, useCallback, useState } from 'react';

import {
    CookiePopupContainer,
    Picture,
    Text,
    AgreeButton,
    Copyright,
} from './style';
import { Props } from './type';
import { Link } from '../Link';

export const CookiePopup: FunctionComponent<Props> = () => {
    const [displayed, setDisplayed] = useState(
        typeof window === 'undefined'
            ? false
            : !window.localStorage.getItem('cookie-accept'),
    );

    const [fadingAway, setFadingAway] = useState(false);

    const onAcceptClick = useCallback(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem('cookie-accept', '1');
        setFadingAway(true);
        setTimeout(() => setDisplayed(false), 600);
    }, []);

    if (!displayed) {
        return null;
    }

    return (
        <CookiePopupContainer fadingAway={fadingAway}>
            <Picture>
                <Copyright>
                    Photo by
                    <br />
                    <Link to="https://unsplash.com/@creativegangsters">
                        Allie Smith
                    </Link>
                </Copyright>
            </Picture>
            <Text>
                Cookie party! We use cookies to improve your experience with our
                website.
                <br />
                By further browsing you agree to accept the cookies.
                <br />
                More information <Link to="/cookie-policy">here</Link>.
                <AgreeButton
                    onClick={onAcceptClick}
                    variant="outlined"
                    color="primary"
                    size="small"
                >
                    Accept!
                </AgreeButton>
            </Text>
        </CookiePopupContainer>
    );
};
