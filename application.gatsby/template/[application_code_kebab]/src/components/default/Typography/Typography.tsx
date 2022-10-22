import React, { FC } from 'react';

import { TypographyPropsType } from './type';
import { TypographyRoot, TypographyAnchor } from './style';
import { useTypography } from './hooks/useTypography';

export const Typography: FC<TypographyPropsType> = (props) => {
    const { restProps, aKey, trueChildren } = useTypography(props);

    return (
        <TypographyRoot {...restProps}>
            {trueChildren}{' '}
            {!!aKey && (
                <TypographyAnchor href={`#${aKey}`} name={aKey}>
                    #
                </TypographyAnchor>
            )}
        </TypographyRoot>
    );
};
