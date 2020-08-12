import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom'
import { AuthContext } from './AuthContextProvider';

type Props = {
  children: any
}

const AuthRedirectHome: React.FC<Props> = ({children}) => {
  const {userState} = useContext(AuthContext)

  // Checking if the user is logged in
  if (userState === undefined) return null

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return userState
    ? <Redirect to="/home" />
    : children;
};

export default AuthRedirectHome;
