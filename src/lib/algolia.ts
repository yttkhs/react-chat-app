import algoliasearch from 'algoliasearch'

const appId = `${process.env.REACT_APP_ALGOLIA_APP_ID}`
const apiKey = `${process.env.REACT_APP_ALGOLIA_SEARCH_ONLY}`

export const algoliaClient = algoliasearch(appId, apiKey);

export const searchClient = {
  // @ts-ignore
  search(requests) {
    // @ts-ignore
    if (requests.every(({params}) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  }
};
