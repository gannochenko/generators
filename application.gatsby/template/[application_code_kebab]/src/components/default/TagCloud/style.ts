import styled from '@emotion/styled';
import { marginProps, reset, muiSpacing } from '@gannochenko/ui.emotion';

import { TagCloudRootPropsType } from './type';

export const TagCloudRoot = styled.div<TagCloudRootPropsType>`
    ${reset};
    & > * {
        margin-right: ${muiSpacing(1)};
        margin-bottom: ${muiSpacing(1)};
    }
    ${marginProps};
`;
