import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from '../lib/firebase'
import Loading from "../components/Loading";

type Props = {
  children: any
}

const Auth: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<Boolean>()
  const [mount, setMount] = useState<Boolean>(true)

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

        // Mount is complete !!
        setMount(false)
      })

    // Clean up
    return () => getUserLoginStatus()
  }, [])

  // Show if mounting
  if (mount) return <Loading />

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return user
    ? children
    : <Redirect to="/login" />;
};

export default Auth;
