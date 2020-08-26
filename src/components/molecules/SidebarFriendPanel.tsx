import React from 'react';
import SidebarFriendList from "./SidebarFriendList";
import SidebarSearchForm from './SidebarSearchForm';
import useFilteredFriendData from "../../hooks/useFilteredFriendData";
import {SidebarPanelComponent} from '../../types';

const SidebarFriendPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  const [friendData, setSearchWord] = useFilteredFriendData()

  const handleChange = (value: string) => {
    setSearchWord(value)
  }

  return value === index
    ? (
      <>
        <SidebarSearchForm changeEvent={handleChange} />
        <SidebarFriendList data={friendData} />
      </>
    )
    : null
};

export default SidebarFriendPanel;
