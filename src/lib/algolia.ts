import algoliasearch from 'algoliasearch'

const appId = `${process.env.REACT_APP_ALGOLIA_APP_ID}`
const apiKey = `${process.env.REACT_APP_ALGOLIA_SEARCH_ONLY}`

export default algoliasearch(appId, apiKey);
