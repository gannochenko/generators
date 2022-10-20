import styled from '@emotion/styled';
import { marginProps, reset } from '@gannochenko/ui.emotion';

import {
    ObjectEditorRootPropsType,
} from './type';

const getRootStyle = (props: ObjectEditorRootPropsType) => {
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

export const ObjectEditorRoot = styled.div<ObjectEditorRootPropsType>`
    ${reset};
    ${getRootStyle};
    ${marginProps};
`;
