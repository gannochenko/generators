import React, { FC } from 'react';
import { FooterRoot, FooterInfo, FooterNoWrap, CICDLink, AnalyticsLink } from './style';
import { Link } from '../Link';
import { COOKIE_POLICY, <% if(use_contact_form) { %>PERSONAL_DATA_POLICY<% } %> } from '../../pathTemplates';

export const Footer: FC = () => {
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
                <Link to={PERSONAL_DATA_POLICY} inverted>
                    Personal data policy
                </Link>
<% } %>
            </FooterInfo>
<% if (deployment === 'vercel') { %>
            <CICDLink
                href="https://vercel.com/gannochenko/<%- project_code_global %>/deployments"
                rel="noreferrer noopener nofollow"
                target="_blank"
            />
<% } %>
<% if (ga_id) { %>
            <AnalyticsLink
                href="https://analytics.google.com/analytics/web/?authuser=1#/INTERNAL_ID/realtime/overview"
                rel="noreferrer noopener nofollow"
                target="_blank"
            />
<% } %>
        </FooterRoot>
    );
};
