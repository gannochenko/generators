import { fn } from './fn';

const makeResponse = (code, message = 'Ok') => {
    if (code === 400) {
        message = 'Go away hacker';
    } else if (code === 500) {
        message = 'Oooops';
    }
    return {
        statusCode: code,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': process.env.CORS,
        },
        body: message,
    };
};

export const handler = (event, context, callback) => {
    const {
        // path,
        body: rawBody,
        httpMethod: method,
        headers,
        queryStringParameters: query,
        requestContext: { path, domainName },
    } = event;
    const safeHeaders = headers || {};

    const { functionName, memoryLimitInMB, getRemainingTimeInMillis } = context;

    // if (safeHeaders['Content-Type'] !== 'application/json') {
    //     return callback(null, makeResponse(400));
    // }

    let body = {};
    try {
        body = JSON.parse(rawBody);
    } catch (error) {
        return callback(null, makeResponse(400));
    }

    const { contact, message } = body;

    fn(message, contact)
        .then(() => {
            callback(null, makeResponse(200));
        })
        .catch((error) => {
            console.error(error);
            callback(null, makeResponse(500));
        });

    return true;
};
