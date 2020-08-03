import firebase from '../lib/firebase'

export class UserData {
  uid?: string
  userId?: string
  displayName?: string
  email?: string

  constructor(init?: Partial<UserData>) {
    Object.assign(this, init)
  }

  // Store user data in database
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

  // Get user data from database
  getUserData(): Promise<any> {
    return firebase.firestore()
      .collection('users')
      .doc(this.uid)
      .get()
      .then((doc) => doc.data())
      .catch(error => alert(error))
  }

  editUserData() {
  }
}
