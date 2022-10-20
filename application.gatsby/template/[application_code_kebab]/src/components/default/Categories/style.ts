import styled from '@emotion/styled';
import { marginProps, reset, muiSpacing } from '@gannochenko/ui.emotion';

import { CategoriesRootPropsType } from './type';

export const CategoriesRoot = styled.div<CategoriesRootPropsType>`
    ${reset};
    display: flex;
    gap: ${muiSpacing(3)};

    a {
        text-decoration: none;
    }

    ${marginProps};
`;
