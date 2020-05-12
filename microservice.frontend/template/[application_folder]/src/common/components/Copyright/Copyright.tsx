import React, { FunctionComponent } from 'react';

import { Link } from '../Link';
import { CopyrightContainer } from './style';
import { CopyrightPropsType } from './type';

export const Copyright: FunctionComponent<CopyrightPropsType> = ({
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
                    <Link to={source}>{sourceText || source}</Link>
                </span>
            )}
        </CopyrightContainer>
    );
};
