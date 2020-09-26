import React from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  clickEvent: (event: React.MouseEvent) => void;
  value: string;
};

const ToggleMenuEventItem: React.FC<Props> = ({ icon, clickEvent, value }) => {
  const Icon = icon;

  return (
    <div
      onClick={clickEvent}
      className="py-2 px-4 flex items-center cursor-pointer hover:bg-gray-100 first:rounded-t last:rounded-b"
    >
      <Icon className="text-gray-600" />
      <span className="ml-3">{value}</span>
    </div>
  );
};

export default ToggleMenuEventItem;
