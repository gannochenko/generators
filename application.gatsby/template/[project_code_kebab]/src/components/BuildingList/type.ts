import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    ObjectLiteralType,
    MarginPropsType,
} from '@gannochenko/ui.styled-components';

export type BuildingListPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        data: ObjectLiteralType[];
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type BuildingListRootPropsType = StylePropsType & BuildingListPropsType;

// export type BuildingListInnerNodePropsType = StylePropsType & ObjectLiteralType;
