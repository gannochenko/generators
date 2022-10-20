import { css } from '@emotion/react';

export const transition = (
    props: Record<string, boolean | number> = { all: true },
) => {
    return css`
        transition: ${Object.keys(props)
            .map((prop) => `${prop} 200ms ease`)
            .join(',')};
    `;
};
