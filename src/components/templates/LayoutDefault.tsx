import React from 'react';
import TheHeader from '../organisms/TheHeader';
import TheToggleMenu from '../organisms/TheToggleMenu';

type Props = {};

const LayoutDefault: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <TheHeader />
      <TheToggleMenu />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default LayoutDefault;
