module.exports = {
    configurations: {
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
        },
    },
    chromeSelector: 'body',
    // fileNameFormatter: ({ configurationName, kind, story }) =>
    //     `${kind}/${story.replace(/ /g, '_')}_${configurationName}`,
};
