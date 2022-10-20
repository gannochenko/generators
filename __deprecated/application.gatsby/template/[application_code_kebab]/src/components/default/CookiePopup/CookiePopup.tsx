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
import { getWindow } from '../../../util/getWindow';
import { COOKIE_POLICY } from '../../../pathTemplates';

const win = getWindow();

export const CookiePopup: FC<CookiePopupPropsType> = () => {
    const [displayed, setDisplayed] = useState(
        win ? !win.localStorage.getItem('cookie-accept') : false,
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
                More information <Link to={COOKIE_POLICY}>here</Link>.
                <CookiePopupAgreeButton
                    onClick={onAcceptClick}
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Accept!
                </CookiePopupAgreeButton>
                <div>
                    <CookiePopupAgreeButtonXS
                        onClick={onAcceptClick}
                        variant="contained"
                        color="primary"
                        size="small"
                    >
                        Accept!
                    </CookiePopupAgreeButtonXS>
                </div>
            </CookiePopupText>
        </CookiePopupRoot>
    );
};
