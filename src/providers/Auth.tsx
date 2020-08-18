import React, {useEffect, useState} from 'react';
import firebase from "../lib/firebase";

type Props = { children: any }

type AuthState = firebase.User | null | undefined

type Context = {
  userState: AuthState
  logout: () => void
}

const defaultContext: Context = {
  userState: undefined,
  logout: () => {}
}

// Create user authentication context
export const AuthContext = React.createContext<Context>(defaultContext)

const Auth: React.FC<Props> = ({children}) => {
  const [userState, setAuthState] = useState<AuthState>(undefined)

  // Change React authentication status to null
  const logout = (): void => {
    setAuthState(null)
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuthState(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{userState, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
