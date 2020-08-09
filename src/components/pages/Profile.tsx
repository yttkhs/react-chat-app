import React, {useEffect, useState} from 'react';
import firebase from '../../lib/firebase'
import Loading from "../organisms/Loading";
import {Link} from 'react-router-dom'
import {UserData} from "../../classes/UserData";

type UserDataInput = {
  userId: string
  displayName: string
  email: string
} | null

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserDataInput>(null)

  useEffect(() => {
    /* Get currently logged in user */
    const currentUser = firebase.auth().currentUser

    /* Determine if current user is logged in */
    if (currentUser) {
      /* Create an instance of UserData */
      const userData = new UserData(currentUser.uid)

      /* Store user data in state */
      userData.getUserData().then(data => {
        setUser(data);
      })
    } else {
      const errorMessage = "COULD NOT GET";

      /* Set the object that stores the error message */
      setUser({
        userId: errorMessage,
        displayName: errorMessage,
        email: errorMessage,
      })
    }
  }, [])

  return (
    <div>
      <p>PROFILE</p>
      {user
        ? (
          <>
            <p>{user.userId}</p>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
          </>
        ) : <Loading />
      }
      <Link to="/home">HOME</Link>
    </div>
  );
};

export default Profile;
