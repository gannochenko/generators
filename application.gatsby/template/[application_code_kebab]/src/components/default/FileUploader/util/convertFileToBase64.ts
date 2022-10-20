import { SelectedFileType } from '../type';

export const convertFileToBase64 = (
    selectedFile: SelectedFileType,
): Promise<SelectedFileType> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile.file);
        reader.onload = () => {
            const result = {
                ...selectedFile,
                preview: reader.result?.toString() || '',
            };
            resolve(result);
        };
        reader.onerror = (error) => reject(error);
    });
};
