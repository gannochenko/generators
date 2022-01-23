const latinize = require('latinize');

const prepareString = (value) =>
    latinize(value)
        .toLowerCase()
        .trim()
        .replace(/(\s)+/g, '-')
        .replace(/(\.)+/g, '_')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .replace(/(-)+/g, '-');

const stripHyphens = (value) => value.replace(/(-)+/g, '-');

module.exports.makeSlug = (main, postfix = '', length = 45) => {
    const mainSlug = `${prepareString(main)}`;
    const postfixSlug = `-${prepareString(postfix)}`;
    const salt = `-${Math.round(Math.random() * 100000)}`;

    if (mainSlug.length > length) {
        return stripHyphens(mainSlug.substr(0, 25).concat(salt));
    }

    if (`${mainSlug}-${postfixSlug}`.length > length) {
        return stripHyphens(`${mainSlug}${salt}`);
    }

    return stripHyphens(`${mainSlug}${postfixSlug}${salt}`);
};
