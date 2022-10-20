module.exports = {
    FOO: '/foo/#KIND#/',
    CONTACTS: '/contacts',
    PERSONAL_DATA_POLICY: '/personal-data-policy',
    COOKIE_POLICY: '/cookie-policy',
    ABOUT: '/about',

    fillTemplate: (template, values) => {
        let result = template;

        if (values) {
            Object.keys(values).forEach((key) => {
                const value = values[key];
                result = result
                    .replace(`#${key}#`, value)
                    .replace(`#${key.toUpperCase()}#`, value);
            });
        }

        return result;
    },
};
