import algoliasearch, {SearchClient} from 'algoliasearch'

const appId = `${process.env.REACT_APP_ALGOLIA_APP_ID}`
const apiKey = `${process.env.REACT_APP_ALGOLIA_SEARCH_ONLY}`

export const algoliaClient = algoliasearch(appId, apiKey);

export const searchClient = {
  search(queries) {
    if (queries.every(({params}) => {
      return params ? !params.query : null;
    })) {
      return Promise.resolve({
        results: queries.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(queries);
  }
} as SearchClient
