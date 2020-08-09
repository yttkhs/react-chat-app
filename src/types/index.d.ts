export interface UserDataTypes extends UserDataInput, UserDataMethod {}

export interface UserDataInput {
  uid: string
}

export interface UserDataMethod {
  setUserData(name: string, email: string): void

  getUserData(): Promise<any>

  setFriendsData(data: FriendsData[]): void
}

export interface FriendsData {
  uid: string
  userId: string
}
