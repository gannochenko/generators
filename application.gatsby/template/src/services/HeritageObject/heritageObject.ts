import axios from 'axios';

import { FileUploadQuota, MimeType } from './type';
import { fetchJSON } from '../../util/fetchJSON';
import { UploadElementType } from '../../components/default/FileUploader/type';

const API_URL = process.env.API_URL;
const API_ENV = process.env.API_ENV;

export const getObject = async (objectId: string) => {
    return fetchJSON(`${API_URL}${API_ENV}/data/objects/find/${objectId}`);
};

export const getUploadUrls = async (
    objectId: string,
    fileQuota: FileUploadQuota,
) => {
    return fetchJSON(`${API_URL}${API_ENV}/data/objects/getuploadurl`, {
        objectId,
        fileQuota,
    });
};

const getContentType = (mime: MimeType | null) => {
    if (!mime) {
        return 'text/octet-stream';
    }

    if (mime === MimeType.jpg) {
        return 'image/jpeg';
    }

    return 'image/png';
};

export const uploadFiles = async (
    uploads: UploadElementType[],
    onFileProgressChange: (upload: UploadElementType, progress: number) => void,
) => {
    return Promise.all(
        uploads.map((upload) => {
            return axios.request({
                method: 'put',
                url: upload.url,
                data: upload.file,
                headers: { 'Content-Type': getContentType(upload.mime) },
                onUploadProgress: (p) => {
                    onFileProgressChange(
                        upload,
                        Math.round((p.loaded / p.total) * 100),
                    );
                },
            });
        }),
    );
};

export const attachFiles = async (uploads: UploadElementType[]) => {
    for (const upload of uploads) {
        await fetchJSON(`${API_URL}${API_ENV}/data/objects/attachfile`, {
            objectId: upload.objectId,
            fileId: upload.fileId,
            fileMime: upload.mime,
            author: '',
            code: '',
        });
    }
};
