import React from 'react';
import HeaderNavigation from '../molecules/HeaderNavigation';
import useAuth from '../../hooks/useAuth';
import HeaderLogo from '../atoms/HeaderLogo';
import ButtonSignIn from '../atoms/ButtonSignIn';

const TheHeader: React.FC = () => {
  const auth = useAuth();

  return (
    <header className="bg-white border-b">
      <div className="h-16 flex items-center justify-between px-6">
        <HeaderLogo />
        {auth ? <HeaderNavigation /> : <ButtonSignIn />}
      </div>
    </header>
  );
};

export default TheHeader;
