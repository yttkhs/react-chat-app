import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from '../lib/firebase'

type Props = {
  children: any
}

const Auth: React.FC<Props> = ({children}) => {
  const firebaseUser = firebase.auth().currentUser
  const [user, setUser] = useState(firebaseUser)

  useEffect(() => {

    // Get currently logged in user
    const unSub = firebase.auth()
      .onAuthStateChanged(user => {
        user
          ? setUser(user)
          : setUser(null)
      })

    // Clean up
    return () => unSub()
  })

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return user
    ? children
    : <Redirect to="/login" />
};

export default Auth;
