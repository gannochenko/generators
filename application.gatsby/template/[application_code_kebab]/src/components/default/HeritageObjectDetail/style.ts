import styled from '@emotion/styled';
import {
    marginProps,
    reset,
    muiSpacing,
    muiBreakpointDown,
} from '@gannochenko/ui.emotion';

import { HeritageObjectDetailRootPropsType } from './type';

export const HeritageObjectDetailRoot = styled.div<HeritageObjectDetailRootPropsType>`
    ${reset};
    ${marginProps};
`;

export const HeritageObjectDetailData = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: ${muiSpacing(20)};
`;

export const HeritageObjectDetailTitle = styled.h1`
    max-width: 60%;
`;

export const HeritageObjectDetailGerman = styled.div`
    margin-top: ${muiSpacing(3)};
`;

export const HeritageObjectDetailLocation = styled.div`
    margin-top: ${muiSpacing(3)};
`;

export const HeritageObjectSummary = styled.div`
    margin-top: ${muiSpacing(6)};
`;

export const HeritageObjectDetailSummaryLine = styled.div`
    font-size: 0.8rem;
    &:not(:last-child) {
        margin-bottom: ${muiSpacing(2)};
    }
`;

export const HeritageObjectDetailLayout = styled.div`
    display: flex;
    ${muiBreakpointDown('sm')} {
        flex-direction: column;
    }
`;

export const HeritageObjectDetailLayoutCentral = styled.div`
    flex: 1 auto;
`;

export const HeritageObjectDetailLayoutSide = styled.div`
    flex: 0 0 ${muiSpacing(90)};
    ${muiBreakpointDown('sm')} {
        flex: 1 auto;
    }
`;

export const EditorButtonsPlacement = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: ${muiSpacing(10)} ${muiSpacing(3)};
`;
