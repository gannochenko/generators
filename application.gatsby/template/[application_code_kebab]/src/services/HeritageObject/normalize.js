const normalizePhotos = (photos) => {
    if (!photos) {
        return [];
    }

    return photos.map((photo) => {
        return {
            variants: {
                normalized: '',
                original: '',
                ...photo.variants,
            },
            code: photo.code ?? '',
            author: photo.author ?? '',
            source: photo.source ?? '',
            uploadedAt: photo.uploadedAt ?? '',
            capturedAt: photo.capturedAt ?? '',
            capturedYearStart: photo.capturedYearStart ?? 0,
            capturedYearEnd: photo.capturedYearEnd ?? 0,
            header: photo.header ?? false,
            preview: photo.preview ?? false,
        };
    });
};

const ensureNumber = (value) => {
    return parseInt(value, 10);
};

const ensureArrayOfNumbers = (value) => {
    if (!value || !Array.isArray(value)) {
        return [];
    }

    return value
        .map((element) => ensureNumber(element))
        .filter((element) => !!element);
};

module.exports = {
    normalizeHeritageObject: (element) => {
        if (!element.slug || element.slug === 'undefined') {
            return null;
        }

        return {
            id: element.id ?? '',
            slug: element.slug ?? '',
            name: element.name ?? '',
            nameDe: element.nameDe ?? '',
            content: element.content ?? '',
            constructionYearStart: element.constructionYearStart ?? 0,
            constructionYearEnd: element.constructionYearEnd ?? 0,
            lossYearStart: element.lossYearStart ?? 0,
            lossYearEnd: element.lossYearEnd ?? 0,
            lost: element.lost ?? false,
            altered: element.altered ?? false,
            remarkable: element.remarkable ?? false,
            condition: ensureNumber(element.condition, 'condition', element),
            location: element.location ?? [],
            locationDescription: element.locationDescription ?? '',
            locationArea: ensureNumber(
                element.locationArea,
                'locationArea',
                element,
            ),
            materials: ensureArrayOfNumbers(element.materials),
            kind: ensureArrayOfNumbers(element.kind),
            createdAt: element.createdAt ?? '',
            updatedAt: element.updatedAt ?? '',
            photos: normalizePhotos(element.photos ?? []),
            heritageId: element.heritageId ?? '',
            heritageLevel: ensureNumber(element.heritageLevel),
            heritageStatus: ensureNumber(element.heritageStatus),
            architects: element.architects ?? [],
            version: element.version ?? 1,
        };
    },
};
