import styled from '@emotion/styled';
import { marginProps, reset } from '@gannochenko/ui.emotion';

import {
    ObjectEditorButtonsRootPropsType,
} from './type';

const getRootStyle = (props: ObjectEditorButtonsRootPropsType) => {
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

export const ObjectEditorButtonsRoot = styled.div<ObjectEditorButtonsRootPropsType>`
    ${reset};
    ${getRootStyle};
    ${marginProps};
`;
