import {
    MimeType,
    SelectedFileType,
    UploadElementType,
    UploadURLListType,
} from '../type';

type UrlIndexType = Record<
    MimeType,
    {
        fileId: string;
        url: string;
        objectId: string;
    }[]
>;

export const extractMime = (file: File) => {
    const fileName = file.name.toUpperCase();
    let mime: MimeType | null = null;
    if (fileName.endsWith('.JPG') || fileName.endsWith('.JPEG')) {
        mime = MimeType.jpg;
    }
    if (fileName.endsWith('.PNG')) {
        mime = MimeType.png;
    }

    return mime;
};

export const makeFileQuota = (files: SelectedFileType[]) => {
    const result: Record<string, number> = {};

    files.forEach(({ file }) => {
        const mime = extractMime(file);

        if (mime) {
            result[mime] = result[mime] ? result[mime] + 1 : 1;
        }
    });

    return result;
};

export const makeUploadList = (
    files: SelectedFileType[] | undefined,
    urls: UploadURLListType[] | undefined,
) => {
    if (!files || !urls) {
        return [];
    }

    const index: UrlIndexType = {} as UrlIndexType;

    urls.forEach(({ attributes }) => {
        const { fileId, fileMime, objectId, url } = attributes;

        if (!(fileMime in index)) {
            index[fileMime] = [];
        }

        index[fileMime].push({
            fileId,
            url,
            objectId,
        });
    });

    const result: UploadElementType[] = [];

    files.forEach((file) => {
        const { mime } = file;

        if (!mime) {
            return;
        }

        const quota = index[mime].pop();
        if (!quota) {
            return;
        }

        result.push({
            ...file,
            ...quota,
        });
    });

    return result;
};
