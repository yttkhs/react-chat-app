import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom'
import Loading from "../components/organisms/Loading";
import {AuthContext} from './AuthContextProvider';
import {UserData} from "../classes/UserData";
import {userDataAction} from '../store/storeUserData';
import {friendDataAction} from '../store/storeFriendData';

type Props = {
  children: any
}

const AuthPage: React.FC<Props> = ({children}) => {
  const currentUser = useContext(AuthContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentUser) {

      // Get user data
      new UserData(currentUser.uid).getUserData()
        .then(data => {

          // Store user basic data in Store
          dispatch(userDataAction.add({
            displayName: data.displayName,
            email: data.email,
            userId: data.userId
          }))

          // Store user friend data in store
          dispatch(friendDataAction.add({
            friend: data.friend
          }))
        })
    }

    return (() => {
      dispatch(userDataAction.reset())
      dispatch(friendDataAction.reset())
    })
  }, [currentUser, dispatch])

  // Checking if the user is logged in
  if (currentUser === undefined) return <Loading />

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return currentUser
    ? children
    : <Redirect to="/login" />;
};

export default AuthPage;
