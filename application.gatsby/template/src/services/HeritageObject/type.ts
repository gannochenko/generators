import { heritageObjectStatusMap } from '../../maps/heritageObjectStatusMap';
import { locationAreaMap } from '../../maps/locationAreaMap';
import { heritageObjectLevelMap } from '../../maps/heritageObjectLevelMap';
import { heritageObjectConditionMap } from '../../maps/heritageObjectConditionMap';
import { heritageObjectKindMap } from '../../maps/heritageObjectKindMap';
import { materialMap } from '../../maps/materialMap';
import { architectsMap } from '../../maps/architectsMap';

type HeritageObjectPhotoType = {
    variants: {
        normalized: string;
    };
    author?: string;
    source?: string;
    uploadedAt: string;
    capturedAt?: string;
    capturedYearStart?: number;
    capturedYearEnd?: number;
    header?: boolean;
    preview?: boolean;
};

export type HeritageObjectType = {
    id: string;
    slug: string;
    name: string;
    nameDe?: string;
    content: string;
    constructionYearStart: number;
    constructionYearEnd: number;
    lossYearStart: number;
    lossYearEnd: number;
    condition?: keyof typeof heritageObjectConditionMap;
    location: { lat: number; lng: number }[];
    locationDescription?: string;
    locationArea?: keyof typeof locationAreaMap;
    materials: (keyof typeof materialMap)[];
    kind: (keyof typeof heritageObjectKindMap)[];
    createdAt: string;
    updatedAt?: string;
    photos: HeritageObjectPhotoType[];
    heritageStatus?: keyof typeof heritageObjectStatusMap;
    heritageLevel?: keyof typeof heritageObjectLevelMap;
    heritageId?: string;
    lost?: boolean;
    altered?: boolean;
    remarkable?: boolean;
    architects?: (keyof typeof architectsMap)[];
    version: number;
};

export type FileUploadQuota = Record<string, number>;

export enum MimeType {
    jpg = 'jpg',
    png = 'png',
}
