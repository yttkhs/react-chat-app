import React, {useEffect, useState} from 'react';
import firebase from '../lib/firebase'
import Loading from "../components/Loading";
import {Link} from 'react-router-dom'
import {UserData} from "../class/UserData";

type UserDataType = Pick<UserData, 'userId' | 'displayName' | 'email'> | null

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserDataType>(null)

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
    })
  }, [])

  return (
    <div>
      <p>PROFILE</p>
      {user
        ? (
          <>
            <p>{user?.userId}</p>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
          </>
        ) : <Loading />
      }
      <Link to="/">HOME</Link>
    </div>
  );
};

export default Profile;
