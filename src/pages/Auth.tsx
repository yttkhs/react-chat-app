import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from '../lib/firebase'

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

  // Show if mounted
  if (mount) {
    return <p>Loading...</p>
  }

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  if (user) {
    return children
  } else {
    return <Redirect to="/login" />
  }
};

export default Auth;
