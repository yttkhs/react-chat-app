import React from 'react';
import firebase from '../../lib/firebase'
import {UserData} from "../../classes/UserData";
import {Hit} from "react-instantsearch-core";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {userDataAction} from "../../store/storeUserData";
import {ChatData} from "../../classes/ChatData";
import {UserDataProperties} from '../../types';

type Props = {
  hits: Hit
}

const ButtonFriendRegister: React.FC<Props> = ({hits}) => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const dispatch = useDispatch()

  const handleClick = () => {

    // Create unique ID
    const uid = firebase.firestore().collection('users').doc().id

    // A friend object that stores a unique ID
    const friendObject = (user: string) => ({
      friend: {
        [user]: {
          roomId: uid
        }
      }
    })

    // Store data in Redux
    dispatch(userDataAction.add(friendObject(hits.userId)))

    // Store your user data in the friend list data
    new UserData(userData.userId).updateUserData(friendObject(hits.userId))

    // Add friend list data to friend's user data
    new UserData(hits.userId).updateUserData(friendObject(userData.userId))

    // Create a chat room
    new ChatData(uid).createChatData()
  }

  return (
    <button type="button" onClick={handleClick}>友達追加</button>
  );
};

export default ButtonFriendRegister;
