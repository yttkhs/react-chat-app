import { UserDataFriend } from "../types";

const createFriendIdList = (friendData: UserDataFriend): string[] => {
  return Object.entries(friendData).map(value => value[0]);
}

export default createFriendIdList
