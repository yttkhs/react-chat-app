import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {RootState} from '../../store';
import {State as UserDataState} from '../../store/storeUserData'

const Profile: React.FC = () => {
  const userData = useSelector<RootState, UserDataState>(({userData}) => userData)

  return (
    <div>
      <p>PROFILE</p>
      <p>{userData.userId}</p>
      <p>{userData.displayName}</p>
      <p>{userData.email}</p>
      <Link to="/home">HOME</Link>
    </div>
  );
};

export default Profile;
