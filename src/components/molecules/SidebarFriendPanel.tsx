import React from 'react';
import SidebarFriendList from "./SidebarFriendList";
import SidebarFriendSearchForm from './SidebarFriendSearchForm';
import {SidebarPanelComponent} from '../../types';

const SidebarFriendPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  return value === index
    ? (
      <>
        <SidebarFriendSearchForm />
        <SidebarFriendList />
      </>
    )
    : null
};

export default SidebarFriendPanel;
