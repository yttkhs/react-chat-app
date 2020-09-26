import algoliasearch, {SearchClient} from 'algoliasearch'

const appId = `${process.env.react_app_algolia_app_id}`
const apiKey = `${process.env.react_app_algolia_search_only}`

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
