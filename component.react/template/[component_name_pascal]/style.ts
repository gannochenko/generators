import styled from '@emotion/styled';
import { marginProps, reset } from '@gannochenko/ui.emotion';

import {
    <%- component_name_pascal %>RootPropsType,
} from './type';

const getRootStyle = (props: <%- component_name_pascal %>RootPropsType) => {
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

export const <%- component_name_pascal %>Root = styled.div<<%- component_name_pascal %>RootPropsType>`
    ${reset};
    ${getRootStyle};
    ${marginProps};
`;
