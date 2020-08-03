import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import algoliasearch from 'algoliasearch'

admin.initializeApp(functions.config().firebase);

const algolia = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
)

exports.onUsersDataCreated = functions.firestore.document('users/{userId}')
  .onCreate((snap, context) => {
    const users = snap.data();
    const index = algolia.initIndex('users');

    users.objectID = context.params.userId;

    return users
      ? index.saveObject(users)
      : null;
  })
