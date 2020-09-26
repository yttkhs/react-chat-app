import React from 'react';
import useAuth from '../hooks/useAuth';
import { StateAuth } from '../types';

type Props = {
  children: React.ReactElement;
};

export const AuthContext = React.createContext<StateAuth>(undefined);

const ProviderAuth: React.FC<Props> = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {auth === undefined ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default ProviderAuth;
