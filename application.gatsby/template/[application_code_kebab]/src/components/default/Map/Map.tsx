import React, { forwardRef } from 'react';
import { YMaps, Map as YMap, Placemark, ZoomControl } from 'react-yandex-maps';

import { MapPropsType } from './type';
import { MapRoot } from './style';
import { useMap } from './hooks/useMap';

export const Map = forwardRef<HTMLDivElement, MapPropsType>(function Map(
    props,
    ref,
) {
    const { rootProps, mapProps, placeMarks, zoomControlProps } = useMap(
        ref,
        props,
    );

    return (
        <MapRoot {...rootProps}>
            <YMaps>
                <YMap {...mapProps}>
                    {placeMarks.map((placeMarkData) => (
                        <Placemark {...placeMarkData} key={placeMarkData.id} />
                    ))}
                    <ZoomControl {...zoomControlProps} />
                </YMap>
            </YMaps>
        </MapRoot>
    );
});

Map.defaultProps = {
    height: '20rem',
};
