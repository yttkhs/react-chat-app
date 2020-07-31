import algoliasearch from 'algoliasearch'

const config = {
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_SEARCH_ONLY
}

export default algoliasearch(`${config.appId}`, `${config.apiKey}`);
