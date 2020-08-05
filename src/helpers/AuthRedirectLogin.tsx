import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from '../lib/firebase'
import Loading from "../components/organisms/Loading";

type Props = {
  children: any
}

const AuthRedirectLogin: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<Boolean | null>(null)

  useEffect(() => {

    // Get currently logged in user
    const getUserLoginStatus = firebase.auth()
      .onAuthStateChanged(user => {

        // Determine if user is logged in
        if (user) {
          setUser(true)
        } else {
          setUser(false)
        }
      })

    // Clean Up
    return () => getUserLoginStatus()
  }, [])

  // Checking if the user is logged in
  if (user === null) return <Loading />

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return user
    ? children
    : <Redirect to="/login" />;
};

export default AuthRedirectLogin;
