import React from 'react';
import {UserData} from "../../classes/UserData";
import {Hit} from "react-instantsearch-core";
import {friendDataAction} from "../../store/storeFriendData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {State as UserDataState} from "../../store/storeUserData";

type Props = {
  hits: Hit
}

const ButtonFriendRegister: React.FC<Props> = ({hits}) => {
  const userData = useSelector<RootState, UserDataState>(({userData}) => userData)
  const dispatch = useDispatch()

  const handleClick = () => {

    // Store data in Firestore
    new UserData(userData.userId).addFriendsData([hits.userId])

    // Store data in Redux
    dispatch(friendDataAction.add([hits.userId]))
  }

  return (
    <button type="button" onClick={handleClick}>友達追加</button>
  );
};

export default ButtonFriendRegister;
