import firebase from '../lib/firebase'
import {FriendsData, UserDataTypes} from '../types'

export class UserData implements UserDataTypes {
  constructor(
    readonly uid: string
  ) {}

  // Store user data in database
  setUserData(name: string, email: string): void {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .set({
        userId: this.uid,
        displayName: name,
        email: email,
        friends: []
      })
      .catch(error => alert(error))
  }

  // Get user data from database
  getUserData(): Promise<any> {
    return firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .get()
      .then((doc) => doc.data())
      .catch(error => alert(error))
  }

  // Set data of friends
  setFriendsData(data: FriendsData[]) {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .set(
        {friends: data},
        {merge: true}
      )
      .catch(error => alert(error))
  }
}
