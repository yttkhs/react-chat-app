import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import { RootState, UserDataProperties } from '../../types';

const Profile: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)

  return (
    <div>
      <p>PROFILE</p>
      <p>{userData.userId}</p>
      <p>{userData.displayName}</p>
      <p>{userData.email}</p>
      <Link to="/profile/edit">Edit Profile</Link>
      <Link to="/home">HOME</Link>
    </div>
  );
};

export default Profile;
