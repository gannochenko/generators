module.exports.makePublicPath = (fileKey) => {
    if (!fileKey) {
        return '';
    }

    return `${process.env.IMAGES_URL}${fileKey}`;
};
