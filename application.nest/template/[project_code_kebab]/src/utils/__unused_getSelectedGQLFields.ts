export const getSelectedGQLFields = (info: Record<string, unknown>) =>
    info.fieldNodes[0].selectionSet.selections.map(
        (item) => item.name.value,
    ) as string[];
