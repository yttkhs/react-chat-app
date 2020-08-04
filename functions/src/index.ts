import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import algoliasearch from 'algoliasearch'

// Allow third party libraries to read firebase data
admin.initializeApp(functions.config().firebase);

// algolia settings
const algolia = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
)

// Save data to algolia when it is registered in users collection of firestore
exports.onUsersDataCreated = functions.firestore.document('users/{userId}')
  .onCreate((snap, context) => {
    const users = snap.data();
    const index = algolia.initIndex('users');

    // Add required parameters to aligolia objects
    users.objectID = context.params.userId;

    if (users) {
      return index.saveObject(users);
    } else {
      return null;
    }
  })
