import { ObjectLiteralType } from '../type';

export const getSelectedGQLFields = (info: ObjectLiteralType) =>
    info.fieldNodes[0].selectionSet.selections.map(
        (item) => item.name.value,
    ) as string[];
