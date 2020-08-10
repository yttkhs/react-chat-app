import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom'
import Loading from "../components/organisms/Loading";
import { AuthContext } from './AuthContextProvider';

type Props = {
  children: any
}

const AuthRedirectLogin: React.FC<Props> = ({children}) => {
  const user = useContext(AuthContext)

  // Checking if the user is logged in
  if (user === undefined) return <Loading />

  // Display home screen if user is logged in
  // Redirect to login screen if user is logged out
  return user
    ? children
    : <Redirect to="/login" />;
};

export default AuthRedirectLogin;
