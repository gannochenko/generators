import { Ref, useMemo } from 'react';
import { MapItemType, MapPropsType } from '../type';
import { MapState } from 'react-yandex-maps';
import { KGD_CENTER, PLACE_MARK_MODULES } from '../constants';
// import { fillTemplate } from '../../../../pathTemplates';

export const useMap = (
    ref: Ref<HTMLDivElement>,
    { locations, edges, height, ...props }: MapPropsType,
) => {
    const placeMarks = useMemo(() => {
        let result: MapItemType[] = [];

        if (locations) {
            result = locations
                .map((location, index) => {
                    return {
                        id: index.toString(),
                        modules: PLACE_MARK_MODULES,
                        geometry: [location.lat, location.lng] as [
                            number,
                            number,
                        ],
                        // properties: {
                        //     balloonContentHeader: title,
                        //     balloonContentBody: `<a href="${path}" target="_blank"><img src="${miniature}" /></a>`,
                        //     balloonContentFooter: `<a href="${path}" target="_blank">Посмотреть</a>`,
                        //     // hintContent: 'The placemark hint',
                        // },
                    };
                })
                .filter((x) => !!x) as MapItemType[];
        }
        return result;
    }, [locations, edges]);

    const defaultState = useMemo(() => {
        const state: MapState = { center: KGD_CENTER, zoom: 12 };

        if (locations && (locations?.length ?? 0) > 0) {
            state.center = [locations[0].lat, locations[0].lng];
            state.zoom = 17;
        }

        return state;
    }, [locations]);

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            height,
            ref, // same for the ref
        },
        mapProps: {
            width: '100%',
            height,
            defaultState,
        },
        zoomControlProps: {
            options: { float: 'right' },
        },
        placeMarks,
    };
};
