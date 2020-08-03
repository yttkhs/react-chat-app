import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import firebase from '../lib/firebase'
import {UserData} from "../class/UserData";
import Loading from "../components/Loading";

const Profile: React.FC = () => {
  const [mount, setMount] = useState<Boolean>(true)
  const [user, setUser] = useState<Pick<UserData, 'userId' | 'displayName' | 'email'>>({
    userId: "",
    displayName: "",
    email: ""
  })

  useEffect(() => {
    // Get currently logged in user
    const currentUser = firebase.auth().currentUser

    // Create an instance of UserData
    const userData = new UserData({
      uid: currentUser?.uid
    })

    // Store user data in state
    userData.getUserData().then(data => {
      setUser(data);

      // Mount is complete !!
      setMount(false)
    })
  }, [])

  return (
    <div>
      <p>PROFILE</p>
      {mount
        ? <Loading />
        : (
          <>
            <p>{user.userId}</p>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
          </>
        )}
      <Link to="/">HOME</Link>
    </div>
  );
};

export default Profile;
