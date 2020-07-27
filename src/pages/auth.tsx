import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from 'firebase'

type Props = {
  children: any
}

const Auth: React.FC<Props> = ({children}) => {
  const [loginCheck, setLoginCheck] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    checkAuthState()
  }, [])

  // Check if you are logged in
  function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoginCheck(true)
        setLoggedIn(true)
      } else {
        setLoginCheck(true)
        setLoggedIn(false)
      }
    })
  }

  // Show while checking login
  if (!loginCheck) {
    return <p>Loading...</p>
  }

  if (loggedIn) {
    return children
  } else {
    return <Redirect to="/login" />
  }
};

export default Auth;
