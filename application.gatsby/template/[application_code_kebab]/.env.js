/** This allows the *particular* env variables to be loaded from the system,
 *  when we dont want the systemvars option of Dotenv to be enabled,
 *  and when we dont have .env file either.
 */

module.exports.allowedEnvVariables = [
    'API_URL',
    'GA_TRACKING_ID',
    'GA_LINK',
    'DEPLOYMENT_LINK'
];
