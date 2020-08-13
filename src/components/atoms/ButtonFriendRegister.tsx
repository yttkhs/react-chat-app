import React from 'react';
import {UserData} from "../../classes/UserData";
import {Hit} from "react-instantsearch-core";
import {friendDataAction} from "../../store/storeFriendData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {State as UserDataState} from "../../store/storeUserData";
import {State as FriendDataState} from "../../store/storeFriendData";

type Props = {
  hits: Hit
}

const ButtonFriendRegister: React.FC<Props> = ({hits}) => {
  const userData = useSelector<RootState, UserDataState>(({userData}) => userData)
  const dispatch = useDispatch()

  const handleClick = () => {

    // Data object to set
    const friendData: FriendDataState = {
      [hits.userId]: {
        userId: hits.userId,
        displayName: hits.displayName,
        chatLog: []
      }
    }

    // Store data in Firestore
    new UserData(userData.userId).setFriendsData(friendData)

    // Store data in Redux
    dispatch(friendDataAction.add(friendData))
  }

  return (
    <button type="button" onClick={handleClick}>友達追加</button>
  );
};

export default ButtonFriendRegister;
