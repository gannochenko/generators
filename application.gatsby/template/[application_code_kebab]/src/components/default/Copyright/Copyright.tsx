import React, { FC } from 'react';

import { Link } from '../../index';
import { CopyrightRoot } from './style';
import { CopyrightPropsType } from './type';

export const Copyright: FC<CopyrightPropsType> = ({
    author,
    source,
    sourceText,
}) => {
    if (!author && !source) {
        return null;
    }

    return (
        <CopyrightRoot>
            {!!author && <span>Photo by {author}</span>}
            {!!source && (
                <span>
                    {author ? ' on ' : ''}
                    <Link to={source} target="_blank" rel="noopener noreferrer">
                        {sourceText || source}
                    </Link>
                </span>
            )}
        </CopyrightRoot>
    );
};
