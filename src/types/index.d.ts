export interface UserDataTypes extends UserDataInput, UserDataMethod {}

export interface UserDataInput {
  uid: string
  userId: string
  displayName: string
  email: string
}

export interface UserDataMethod {
  setUserData(): void

  getUserData(): Promise<any>
}
