import styled, { css } from 'styled-components';
import { marginProps, reset } from '@gannochenko/ui.styled-components';
import { propsBlocker } from '../../util';

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

export const <%- component_name_pascal %>Root = styled.div.withConfig(propsBlocker)<<%- component_name_pascal %>RootPropsType>`
    ${reset};
    ${getRootStyle};
    ${marginProps};
`;
