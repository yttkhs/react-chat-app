import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import algoliasearch from 'algoliasearch'

// Allow third party libraries to read firebase data
admin.initializeApp(functions.config().firebase)

// Algolia settings
const client = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
)

// Algolia Users Index
const index = client.initIndex('users')

// Save data to algolia when it is registered in users collection of firestore
exports.onUsersDataCreated = functions.firestore.document('users/{userId}')
.onCreate((snap, context) => {
  const users = snap.data()

  // Add required parameters to Aligolia objects
  users.objectID = context.params.userId

  return index.saveObject(users)
})

// Update Algolia data after updating Firestore user data
exports.onUsersDataUpdated = functions.firestore.document('users/{userId}')
.onUpdate((change, context) => {
  const users = change.after.data()

  // Add required parameters to Aligolia objects
  users.objectID = context.params.userId

  return index.partialUpdateObject(users)
})
