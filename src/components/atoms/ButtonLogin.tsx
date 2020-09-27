import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../lib/firebase';
import { uiConfig } from '../../lib/firebaseUi';

const ButtonLogin: React.FC = () => {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
};

export default ButtonLogin;
