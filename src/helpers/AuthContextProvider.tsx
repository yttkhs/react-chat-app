import React, {useEffect, useState} from 'react';
import firebase from "../lib/firebase";

type Props = { children: any }
type User = firebase.User | null | undefined;

// Create user authentication context
export const AuthContext = React.createContext<User>(undefined)

const AuthContextProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<User>(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
