import React, {useContext, useEffect} from 'react';
import firebase from "../lib/firebase";
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {AuthContext} from './AuthContextProvider';
import {UserData} from "../classes/UserData";
import {userDataAction} from '../store/storeUserData';
import {friendDataAction} from '../store/storeFriendData';
import Loading from "../components/organisms/Loading";

type Props = {
  children: any
}

const AuthPage: React.FC<Props> = ({children}) => {
  const {userState} = useContext(AuthContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userState) {

      // Get user data
      new UserData(userState.uid).getUserData()
        .then(({displayName, email, userId, friend, biography}) => {

          // Store user basic data in Store
          dispatch(userDataAction.add({
            displayName,
            email,
            userId,
            biography
          }))

          // Store user friend data in store
          dispatch(friendDataAction.add(friend))
        })

      // Detect changes in firebase's "Users" collection and update friend list
      const realtimeUpdate = firebase.firestore()
        .collection("users")
        .doc(userState.uid)
        .onSnapshot(snapshot => {
          const data = snapshot.data()

          if (data !== undefined) {

            // Update friend list
            dispatch(friendDataAction.add(data.friend))
          }
        })

      return (() => {
        dispatch(userDataAction.reset())
        dispatch(friendDataAction.reset())
        realtimeUpdate(); // Unsubscribe
      })
    }
  }, [userState, dispatch])

  // Checking if the user is logged in
  if (userState === undefined) return <Loading />

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return userState
    ? children
    : <Redirect to="/login" />;
};

export default AuthPage;
