import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    ObjectLiteralType,
    MarginPropsType,
} from '@gannochenko/ui.emotion';
// import { BuildingEdgeType } from '../../type';

export type MapGeometryType = [number, number];

export type MapItemType = {
    id: string;
    geometry: MapGeometryType;
    properties?: {
        //balloonContent: string;
    } & ObjectLiteralType;
};

export type MapPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        locations: { lat: number; lng: number }[];
        height: string;
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type MapRootPropsType = StylePropsType & MapPropsType;
