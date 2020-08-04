import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from '../lib/firebase'

type Props = {
  children: any
}

const AuthRedirectHome: React.FC<Props> = ({children}) => {
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
  if (user === null) return null

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return user
    ? <Redirect to="/home" />
    : children;
};

export default AuthRedirectHome;
