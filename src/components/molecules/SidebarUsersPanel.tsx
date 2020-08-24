import React from 'react';
import SidebarUsersSearchForm from './SidebarUsersSearchForm';
import SidebarUsersList from "./SidebarUsersList";
import { SidebarPanelComponent } from '../../types';

const SidebarUsersPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  return value === index
    ? (
      <>
        <SidebarUsersSearchForm />
        <SidebarUsersList />
      </>
    )
    : null
};

export default SidebarUsersPanel;
