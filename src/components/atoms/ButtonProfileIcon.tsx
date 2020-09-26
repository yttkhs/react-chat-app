import React from 'react';
import { useSetRecoilState } from 'recoil';
import { FaUserAlt } from 'react-icons/fa';
import { toggleMenuState } from '../../store';

const ButtonProfileIcon: React.FC = () => {
  const setToggleMenuState = useSetRecoilState(toggleMenuState);

  return (
    <button
      onClick={() => setToggleMenuState(true)}
      className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center"
    >
      <FaUserAlt className="text-white" />
    </button>
  );
};

export default ButtonProfileIcon;
