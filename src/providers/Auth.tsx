import React, {useEffect, useState} from 'react';
import firebase from "../lib/firebase";

type Props = { children: any }

type AuthState = firebase.User | null | undefined

type Context = {
  userState: AuthState
  logoutFirebaseAuth: () => void
}

const defaultContext: Context = {
  userState: undefined,
  logoutFirebaseAuth: () => {}
}

// Create user authentication context
export const AuthContext = React.createContext<Context>(defaultContext)

const Auth: React.FC<Props> = ({children}) => {
  const [userState, setAuthState] = useState<AuthState>(undefined)

  // Change React authentication status to null
  const logoutFirebaseAuth = (): void => {
    setAuthState(null)
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuthState(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{userState, logoutFirebaseAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
