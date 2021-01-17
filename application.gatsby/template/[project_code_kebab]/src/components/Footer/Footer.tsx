import React, { FC } from 'react';
import { FooterRoot, FooterInfo, FooterNoWrap } from './style';
import { Link } from '../Link';

export const Footer: FC = () => {
    return (
        <FooterRoot>
            <FooterInfo>
                <FooterNoWrap>
                    &copy; then &mdash; now ({new Date().getFullYear()})
                </FooterNoWrap>
                <Link to="/cookie-policy" inner>
                    Cookie policy
                </Link>
            </FooterInfo>
        </FooterRoot>
    );
};
