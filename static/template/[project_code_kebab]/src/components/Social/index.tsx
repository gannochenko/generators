import React, { FunctionComponent } from 'react';
const facebookLogo = require('./assets/facebook.svg') as string;
const twitterLogo = require('./assets/twitter.svg') as string;
const mediumLogo = require('./assets/medium.svg') as string;
const linkedinLogo = require('./assets/linkedin.svg') as string;
const githubLogo = require('./assets/github.svg') as string;
const instagramLogo = require('./assets/instagram.svg') as string;

import { Image } from './style';
import { Props } from './props';

export const Social: FunctionComponent<Props> = ({
    type,
    src,
    ...restProps
}) => {
    let logo = null;
    if (type === 'facebook') {
        logo = facebookLogo;
    } else if (type === 'twitter') {
        logo = twitterLogo;
    } else if (type === 'medium') {
        logo = mediumLogo;
    } else if (type === 'linkedin') {
        logo = linkedinLogo;
    } else if (type === 'github') {
        logo = githubLogo;
    } else if (type === 'instagram') {
        logo = instagramLogo;
    }

    if (!logo) {
        return null;
    }

    if (src) {
        return (
            <a
                href={src}
                target="_blank"
                rel="noreferrer noopener"
                {...restProps}
            >
                <Image src={logo} />
            </a>
        );
    }

    return <Image src={logo} {...restProps} />;
};
