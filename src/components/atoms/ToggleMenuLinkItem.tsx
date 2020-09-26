import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  href: string;
  value: string;
};

const ToggleMenuLinkItem: React.FC<Props> = ({ icon, href, value }) => {
  const Icon = icon;

  return (
    <div className="first:rounded-t last:rounded-b hover:bg-gray-100">
      <Link href={href}>
        <a className="block py-2 px-4 flex items-center">
          <Icon className="text-gray-600" />
          <span className="ml-3">{value}</span>
        </a>
      </Link>
    </div>
  );
};

export default ToggleMenuLinkItem;
