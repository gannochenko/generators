import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import { withClient, usePage } from '../../lib';

import { Container, Layout, Link } from '../../components';

import { CookiePolicyPagePropsType, CookiePolicyPagePropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';
import { SEO } from '../../components/SEO';

const CookiePolicyPageComponent: FunctionComponent<CookiePolicyPagePropsType> = (
    props,
) => {
    usePage(props);

    return (
        <>
            <SEO title="Cookie policy" />
            <Container>
                <h1>What Are Cookies</h1>
                As is common practice with almost all professional websites this
                site uses cookies, which are tiny files that are downloaded to
                your computer, to improve your experience. This page describes
                what information they gather, how I use it and why I sometimes
                need to store these cookies. I will also share how you can
                prevent these cookies from being stored however this may
                downgrade or &apos;break&apos; certain elements of the sites
                functionality. For more general information on cookies, please
                read{' '}
                <Link href="https://www.cookieconsent.com/what-are-cookies/">
                    &laquo;What Are Cookies&raquo;
                </Link>
                .<h2>How I Use Cookies</h2>I use cookies for a variety of
                reasons detailed below. Unfortunately in most cases there are no
                industry standard options for disabling cookies without
                completely disabling the functionality and features they add to
                this site. It is recommended that you leave on all cookies if
                you are not sure whether you need them or not in case they are
                used to provide a service that you use.
                <h2>Disabling Cookies</h2>
                You can prevent the setting of cookies by adjusting the settings
                on your browser (see your browser Help for how to do this). Be
                aware that disabling cookies will affect the functionality of
                this and many other websites that you visit. Disabling cookies
                will usually result in also disabling certain functionality and
                features of the this site. Therefore it is recommended that you
                do not disable cookies.
                <h2>The Cookies I Set</h2>
                <ul>
                    <li>
                        Site preferences cookies.
                        <p>
                            In order to provide you with a great experience on
                            this site I provide the functionality to set your
                            preferences for how this site runs when you use it.
                            In order to remember your preferences I need to set
                            cookies so that this information can be called
                            whenever you interact with a page is affected by
                            your preferences.
                        </p>
                    </li>
                </ul>
                <h2>Third Party Cookies</h2>
                <p>
                    In some special cases I also use cookies provided by trusted
                    third parties. The following section details which third
                    party cookies you might encounter through this site. - This
                    site uses Google Analytics which is one of the most
                    widespread and trusted analytics solution on the web for
                    helping us to understand how you use the site and ways that
                    I can improve your experience. These cookies may track
                    things such as how long you spend on the site and the pages
                    that you visit so I can continue to produce engaging
                    content. All statistics I gather with Google Analytics is
                    completely anonymous.
                </p>
                <p>
                    For more information on Google Analytics cookies, see the
                    official Google Analytics page.
                </p>
                <h2>More Information</h2>
                <p>
                    Hopefully that has clarified things for you and as was
                    previously mentioned if there is something that you
                    aren&apos;t sure whether you need or not it&apos;s usually
                    safer to leave cookies enabled in case it does interact with
                    one of the features you use on our site.
                </p>
                <p>
                    However if you are still looking for more information then
                    you can contact me by sending an email to
                </p>
            </Container>
        </>
    );
};

export const CookiePolicyPage = withNotification<CookiePolicyPagePropsAlt>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.cookiePolicy,
            mapDispatchToProps,
        )(CookiePolicyPageComponent),
    ),
);

export const CookiePolicyRenderer: RendererType = () => (
    <Layout topPadding>
        <CookiePolicyPage />
    </Layout>
);
