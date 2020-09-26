import React from 'react';
import Link from 'next/link';

const HeaderLogo: React.FC = () => {
  return (
    <Link href="/">
      <a className="text-xl font-bold text-gray-800">LOGO</a>
    </Link>
  );
};

export default HeaderLogo;
