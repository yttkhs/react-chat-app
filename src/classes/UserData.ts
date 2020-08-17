import firebase from '../lib/firebase'
import {_UserData, UserDataProperties} from '../types'

export class UserData implements _UserData {
  constructor(readonly uid: string) {}

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
        friend: {}
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
  updateUserData(payload: Partial<UserDataProperties>): void {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .update({
        ...payload
      })
      .catch(error => alert(error))
  }
}
