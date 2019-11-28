// const getOptions = require('loader-utils').getOptions;
// const validateOptions = require('schema-utils').validateOptions;

// const schema = {
//     type: 'object',
//     properties: {
//         test: {
//             type: 'string'
//         }
//     }
// };

module.exports = function() {
    // const options = getOptions(this);
    // validateOptions(schema, options, 'Example Loader');

    return `
        const protoLoader = require('@grpc/proto-loader');
        module.exports = protoLoader.loadSync(
            '${this.resourcePath}',
            {keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            });
    `;
};
