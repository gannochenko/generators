import React, { FunctionComponent } from 'react';

import { Link } from '../';
import { CopyrightContainer } from './style';
import { Props } from './type';

export const Copyright: FunctionComponent<Props> = ({
    author,
    source,
    sourceText,
}) => {
    if (!author && !source) {
        return null;
    }

    return (
        <CopyrightContainer>
            {!!author && <span>Photo by {author}</span>}
            {!!source && (
                <span>
                    {author ? ' on ' : ''}
                    <Link to={source} target="_blank" rel="noopener noreferrer">
                        {sourceText || source}
                    </Link>
                </span>
            )}
        </CopyrightContainer>
    );
};
