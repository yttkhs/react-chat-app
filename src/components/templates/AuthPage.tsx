import React, {useContext, useEffect} from 'react';
import firebase from "../../lib/firebase";
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../../providers/Auth';
import {userDataAction} from '../../store/actions/userDataAction';
import Loading from "../organisms/Loading";

type Props = {
  children: any
}

const AuthPage: React.FC<Props> = ({children}) => {
  const {userState} = useContext(AuthContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userState) {

      // Detect changes in firebase's "Users" collection and update friend list
      const realtimeUpdate = firebase.firestore()
        .collection("users")
        .doc(userState.uid)
        .onSnapshot(snapshot => {

          // Store snapshot object data in a variable
          const data = snapshot.data()

          if (data !== undefined) {

            // Store user basic data in Store
            dispatch(userDataAction.add({
              displayName: data.displayName,
              email: data.email,
              userId: data.userId,
              biography: data.biography,
              friend: data.friend
            }))
          }
        })

      return (() => {
        dispatch(userDataAction.reset())
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
