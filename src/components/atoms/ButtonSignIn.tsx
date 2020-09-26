import React from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import signInAuth from '../../modules/signInAuth';

const ButtonSignIn: React.FC = () => {
  return (
    <button
      onClick={signInAuth}
      className="flex items-center rounded py-2 px-4 bg-indigo-500 text-white"
    >
      <RiLogoutCircleRLine className="text-base" />
      <span className="ml-2 text-sm font-bold">SIGN IN</span>
    </button>
  );
};

export default ButtonSignIn;
