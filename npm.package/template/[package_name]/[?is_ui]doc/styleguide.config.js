const path = require('path');

module.exports = {
    title: '<%- package_name %>',
    components: '../src/components/**/*.tsx',
    ignore: ['**/__test__/**', '**/__story__/**'],
    getComponentPathLine(componentPath) {
        const name = path.basename(path.dirname(componentPath));
        return `import { ${name} } from '<%- package_name_full %>';`
    },
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    // sections: [ {
    //     name: 'Test section 1',
    //     description: 'Test secion 1 description',
    //     components: function () {
    //         return glob.sync(path.resolve(__dirname, '../src/components/**/*.tsx'))
    //             .filter(function (module) {
    //                 return /\/[A-Z]\w*\.tsx$/.test(module);
    //             });
    //     },
    // }, {
    //     name: 'Test secion 2',
    //     description: 'Test section 2 description'
    // }],
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({
        propFilter: (prop) => {
            if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules');
            }

            return true;
        }
    }).parse,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        }
    }
};
