import * as functions from 'firebase-functions'
import client from './aligolia'

exports.onUsersDataWrited = functions.database.ref('users/')
  .onWrite((change) => {
    const users = change.after.val();
    const index = client.initIndex('users');

    return index.saveObjects(users);
  })
