import React from 'react';
import { useRecoilState } from 'recoil';
import { RiLogoutCircleLine, RiProfileLine } from 'react-icons/ri';
import { toggleMenuState } from '../../store';
import useAuth from '../../hooks/useAuth';
import signOutAuth from '../../modules/signOutAuth';
import ToggleMenuEventItem from '../atoms/ToggleMenuEventItem';
import ToggleMenuLinkItem from '../atoms/ToggleMenuLinkItem';

const TheToggleMenu: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useRecoilState(toggleMenuState);
  const auth = useAuth();

  return (
    <div
      onClick={() => setToggleMenu(false)}
      className={`fixed w-full h-screen z-10 ${
        toggleMenu ? 'block' : 'hidden'
      }`}
    >
      <div className="w-64 mt-16 p-3 absolute top-0 right-0">
        <div className="shadow-md border rounded divide-y divide-gray-100 bg-white">
          <div className="p-4 text-sm font-bold">
            {auth && auth.displayName}
          </div>
          <ToggleMenuLinkItem
            icon={RiProfileLine}
            href="/"
            value="プロフィール"
          />
          <ToggleMenuEventItem
            icon={RiLogoutCircleLine}
            clickEvent={signOutAuth}
            value="ログアウト"
          />
        </div>
      </div>
    </div>
  );
};

export default TheToggleMenu;
