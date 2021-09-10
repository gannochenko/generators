import React, { FC } from 'react';
import { FooterRoot, FooterInfo, FooterNoWrap, CICDLink, AnalyticsLink } from './style';
import { Link } from '../Link';
import { useFooter } from './hooks/useFooter';
import { COOKIE_POLICY, <% if(use_contact_form) { %>PERSONAL_DATA_POLICY<% } %> } from '../../pathTemplates';

export const Footer: FC = () => {
    const {
        deploymentLink,
        gALink,
        showDeploymentLink,
        showGALinkLink,
    } = useFooter();

    return (
        <FooterRoot>
            <FooterInfo>
                <FooterNoWrap>
                    &copy; then &mdash; now ({new Date().getFullYear()})
                </FooterNoWrap> &bull;{' '}
                <Link to={COOKIE_POLICY} inverted>
                    Cookie policy
                </Link>
<% if(use_contact_form) { %>
                &bull;{' '}
                <Link to={PERSONAL_DATA_POLICY} inverted>
                    Personal data policy
                </Link>
<% } %>
            </FooterInfo>
            {
                showDeploymentLink
                &&
                <CICDLink
                    href={deploymentLink}
                    rel="noreferrer noopener nofollow"
                    target="_blank"
                />
            }
            {
                showGALinkLink
                &&
                <AnalyticsLink
                    href={gALink}
                    rel="noreferrer noopener nofollow"
                    target="_blank"
                />
            }
        </FooterRoot>
    );
};
