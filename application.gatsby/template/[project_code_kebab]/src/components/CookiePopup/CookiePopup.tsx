import React, { FC, useCallback, useState } from 'react';

import {
    CookiePopupRoot,
    CookiePopupPicture,
    CookiePopupText,
    CookiePopupAgreeButton,
    CookiePopupAgreeButtonXS,
    CookiePopupCopyright,
} from './style';
import { CookiePopupPropsType } from './type';
import { Link } from '../Link';

export const CookiePopup: FC<CookiePopupPropsType> = () => {
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
        <CookiePopupRoot fadingAway={fadingAway}>
            <CookiePopupPicture>
                <CookiePopupCopyright>
                    Photo by
                    <br />
                    <Link to="https://unsplash.com/@creativegangsters">
                        Allie Smith
                    </Link>
                </CookiePopupCopyright>
            </CookiePopupPicture>
            <CookiePopupText>
                Tea party! I use <b>cookies</b> to improve your experience with
                my website.
                <br />
                By further browsing you agree to accept the cookies.
                <br />
                More information <Link to="/cookie-policy">here</Link>.
                <CookiePopupAgreeButton onClick={onAcceptClick}>
                    Accept!
                </CookiePopupAgreeButton>
                <div>
                    <CookiePopupAgreeButtonXS onClick={onAcceptClick}>
                        Accept!
                    </CookiePopupAgreeButtonXS>
                </div>
            </CookiePopupText>
        </CookiePopupRoot>
    );
};
