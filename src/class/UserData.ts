import firebase from '../lib/firebase'

export class UserData {
  uid?: string
  displayName?: string
  email?: string

  constructor(init?: Partial<UserData>) {
    Object.assign(this, init)
  }

  // Store user data in database
  setUserData(): void {
    firebase.database()
      .ref('users/' + this.uid)
      .set({
        displayName: this.displayName,
        email: this.email
      })
      .catch(error => alert(error))
  }

  // Get user data from database
  getUserData(): Promise<any> {
    return firebase.database()
      .ref('users/' + this.uid)
      .once('value')
      .then(snapshot => snapshot.val())
      .catch(error => alert(error))
  }

  editUserData() {}
}
