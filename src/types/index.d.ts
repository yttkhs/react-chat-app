export interface _UserData {
  uid: string
}

export interface UserDataProperties {
  userId: string,
  displayName: string,
  email: string
  biography: string
  friend: UserDataFriend
}

export interface UserDataFriend {
  [key: string]: {
    roomId: string
  }
}
