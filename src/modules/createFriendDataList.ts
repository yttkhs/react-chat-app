import { UserDataFriend } from "../types";

const createFriendDataList = (friendData: UserDataFriend) => {
  return Object.entries(friendData).map(value => value[1]);
}

export default createFriendDataList
