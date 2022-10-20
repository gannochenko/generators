import { HeritageObjectDetailType } from './HeritageObjectDetail/type';

export type ObjectEditorPropsGenericType = Partial<{
    data: HeritageObjectDetailType;
    objectId: string;
    onDataUpdate: (data: HeritageObjectDetailType) => void;
}>;
