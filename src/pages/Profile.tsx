import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import firebase from '../lib/firebase'
import {UserData} from "../class/UserData";

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: ""
  })

  useEffect(() => {
    const currentUser = firebase.auth().currentUser

    // Create an instance of UserData
    const userData = new UserData({
      uid: currentUser?.uid
    })

    // Store user data in state
    userData.getUserData().then(data => setUser(data))
  }, [])

  return (
    <div>
      <p>PROFILE</p>
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <Link to="/">HOME</Link>
    </div>
  );
};

export default Profile;
