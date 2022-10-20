import { useMutation } from 'react-query';
import { HeritageObjectDetailPropsType } from '../type';
import { useDataProcess } from './useDataProcess';
import { getObject } from '../../../../services/HeritageObject/heritageObject';
import { useCombinedData } from './useCombinedData';
import { useState } from 'react';
import { eventBus } from '../../../../util/eventBus';
import { EventsEnum } from '../../../../util/events';

export const useHeritageObjectDetail = <E extends HTMLDivElement>(
    props: HeritageObjectDetailPropsType,
) => {
    const { data } = props;
    const objectId = data?.id || '';

    const [editMode, setEditMode] = useState(false);

    const {
        data: newData,
        isSuccess,
        isLoading,
        mutate: reloadData,
    } = useMutation(`data-${objectId}`, () => getObject(objectId));

    const resultData = useCombinedData(data, newData?.data);

    const {
        content,
        headerImage,
        name,
        galleryImages,
        nameDe,
        locationAreaLabel,
        locationDescription,
        heritageStatusLabel,
        lostLabel,
        constructedLabel,
        conditionLabel,
        conditionLevelIcon,
        kindTags,
        materialTags,
        architects,
        architectsLabel,
        lost,
        id,
        location,
    } = useDataProcess(props, resultData);

    return {
        rootProps: props,
        mapProps: {
            locations: data?.location ?? [],
        },
        content: content ?? '',
        pageHeaderProps: {
            image: headerImage,
            imageAlt: name,
            imageOverlayOpacity: 0.7,
            containerMaxWidth: '100%',
        },
        name,
        nameDe,
        location,
        heritageStatusLabel,
        lostLabel,
        constructedLabel,
        conditionLabel,
        conditionLevelIcon,
        kindProps: {
            tags: kindTags,
        },
        materialProps: {
            tags: materialTags,
        },
        architects,
        architectsLabel,
        showNameDe: !!nameDe,
        showLocation: !!locationDescription || !!locationAreaLabel,
        showSummary: true,
        showLost: lost,
        showConstructed: !!constructedLabel,
        showHeritageStatusLabel: !!heritageStatusLabel,
        showAltered: data?.altered ?? false,
        showCondition: !lost && !!conditionLabel,
        showRemarkable: !!data?.remarkable,
        showArchitects: !!architects.length,
        imageGalleryProps: {
            images: galleryImages,
            showAddImageButton: editMode && !isLoading,
            onAddImageButtonClick: () => {
                eventBus.dispatch(
                    EventsEnum.OBJECT_EDITOR_FILE_UPLOADER_TOGGLE,
                );
            },
        },
        objectEditorButtonsProps: {
            objectId: id,
            data,
            showToggleEditModeButton: !editMode,
            onToggleEditMode: () => {
                setEditMode((prevState) => !prevState);
                reloadData();
            },
            onDataChange: () => {
                reloadData();
            },
        },
    };
};
