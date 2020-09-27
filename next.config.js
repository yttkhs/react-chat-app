/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src');

    return config;
  },
  env: {
    react_app_api_key: process.env.REACT_APP_API_KEY,
    react_app_auth_domain: process.env.REACT_APP_AUTH_DOMAIN,
    react_app_database_url: process.env.REACT_APP_DATABASE_URL,
    react_app_project_id: process.env.REACT_APP_PROJECT_ID,
    react_app_storage_bucket: process.env.REACT_APP_STORAGE_BUCKET,
    react_app_messaging_sender_id: process.env.REACT_APP_MESSAGING_SENDER_ID,
    react_app_app_id: process.env.REACT_APP_APP_ID,
    react_app_measurement_id: process.env.REACT_APP_MEASUREMENT_ID,
    react_app_algolia_app_id: process.env.REACT_APP_ALGOLIA_APP_ID,
    react_app_algolia_admin_key: process.env.REACT_APP_ALGOLIA_ADMIN_KEY,
    react_app_algolia_search_only: process.env.REACT_APP_ALGOLIA_SEARCH_ONLY,
  },
};

module.exports = nextConfig;
