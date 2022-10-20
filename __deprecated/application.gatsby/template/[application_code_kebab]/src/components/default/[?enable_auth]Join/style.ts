import styled from '@emotion/styled';
import { marginProps, reset } from '@gannochenko/ui.emotion';

import {
    JoinRootPropsType,
} from './type';

const getRootStyle = (props: JoinRootPropsType) => {
    let result = {};

    // if (propA) {
    //     result = css`
    //         ${result};
    //         color: grey;
    //         // some other css
    //     `;
    // }

    // maybe some other props

    return result;
};

export const JoinRoot = styled.div<JoinRootPropsType>`
    ${reset};
    ${getRootStyle};
    ${marginProps};
`;
