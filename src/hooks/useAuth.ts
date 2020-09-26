import { useEffect, useState } from 'react';
import firebase from '../lib/firebase';
import { StateAuth } from '../types';

const useAuth = () => {
  const [authState, setAuthState] = useState<StateAuth>(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthState(user);
    });
  }, []);

  return authState;
};

export default useAuth;
