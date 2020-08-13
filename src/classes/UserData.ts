import firebase from '../lib/firebase'
import {UserDataTypes} from '../types'

export class UserData implements UserDataTypes {
  constructor(readonly uid: string) {
  }

  // Store user data in database
  setUserData(name: string, email: string): void {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .set({
        userId: this.uid,
        displayName: name,
        email: email,
        biography: "",
        friend: []
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

  // Update user data
  updateUserData(displayName: string, biography: string): void {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .update({
        displayName: displayName,
        biography: biography
      })
      .catch(error => alert(error))
  }

  // Add friend data
  addFriendsData(friend: string[]): void {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .set(
        {friend: friend},
        {merge: true}
      )
      .catch(error => alert(error))
  }
}
