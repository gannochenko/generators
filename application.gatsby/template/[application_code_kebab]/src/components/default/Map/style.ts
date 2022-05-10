import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { marginProps, reset } from '@gannochenko/ui.emotion';

import { MapRootPropsType } from './type';

const getRootStyle = ({ height }: MapRootPropsType) => {
    let result = {};

    if (height) {
        result = css`
            ${result};
            height: ${height};
        `;
    }

    return result;
};

export const MapRoot = styled.div<MapRootPropsType>`
    ${reset};
    background-color: #e5e4e4;
    position: relative;
    &:before {
        position: absolute;
        top: 30%;
        left: calc(50% - 117px / 2);
        content: 'Карта загружается';
        font-size: 0.8rem;
    }
    ${marginProps};
    ${getRootStyle};
`;
