import { HeritageObjectDetailType } from '../type';
import { normalizeHeritageObject } from '../../../../services/HeritageObject/normalize';
import { makePublicPath } from '../../../../util/makePublicPath';
import { HeritageObjectType } from '../../../../services/HeritageObject/type';

export const useCombinedData = (
    currentData?: HeritageObjectDetailType,
    newData?: HeritageObjectType,
) => {
    if (!newData) {
        return currentData;
    }

    const normalNewData = normalizeHeritageObject(
        newData,
    ) as HeritageObjectDetailType;

    const newHeader = normalNewData.photos.find((photo) => photo.header);
    if (newHeader) {
        // check if there was a gatsby image generated before
        const headerUrlPart = newHeader.variants.normalized;
        if (currentData?.headerPhotoImage) {
            if (currentData.headerPhotoImage.url.includes(headerUrlPart)) {
                // same header as before
                normalNewData.headerPhotoImage = currentData.headerPhotoImage;
            } else {
                normalNewData.headerPhotoImage = {
                    url: makePublicPath(headerUrlPart),
                };
            }
        }
    }

    // take all pictures and find gatsby images for them, if available
    normalNewData.photoImages = normalNewData.photos.map((photo) => {
        return {
            url: makePublicPath(photo.variants.normalized),
        };
    });

    // console.log('new data');
    // console.log(newData);
    console.log('normal new data');
    console.log(normalNewData);
    console.log('current data');
    console.log(currentData);

    return normalNewData;
};
