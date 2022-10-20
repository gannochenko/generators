import { HTMLAttributes } from 'react';
import { StylePropsType, MarginPropsType } from '@gannochenko/ui.emotion';
import { HeritageObjectListDataItem } from '../../components/default/HeritageObjectList/type';

export type LostHeritageObjectListPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        data: {
            allHeritageObject: {
                nodes: HeritageObjectListDataItem[];
            };
        };
        path: string;
        pageContext: {
            numPages: number;
            currentPage: number;
        };
        // put your custom props here
    }> &
    MarginPropsType;

export type HeritageObjectListRootPropsType = StylePropsType &
    LostHeritageObjectListPropsType;
