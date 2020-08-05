import firebase from '../lib/firebase'
import {UserDataTypes} from '../types'

export class UserData implements UserDataTypes {
  constructor(
    readonly uid: string,
    readonly userId: string = "",
    readonly displayName: string = "",
    readonly email: string = ""
  ) {}

  /* Store user data in database */
  setUserData(): void {
    firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .set({
        userId: this.userId,
        displayName: this.displayName,
        email: this.email
      })
      .catch(error => alert(error))
  }

  /* Get user data from database */
  getUserData(): Promise<any> {
    return firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .get()
      .then((doc) => doc.data())
      .catch(error => alert(error))
  }
}
