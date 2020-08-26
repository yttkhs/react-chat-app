import React from 'react';
import SidebarSearchForm from './SidebarSearchForm';
import SidebarTalkList from "./SidebarTalkList";
import {SidebarPanelComponent} from "../../types";
import useFilteredFriendData from '../../hooks/useFilteredFriendData';

const SidebarTalkPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  const [friendData, setSearchWord] = useFilteredFriendData()

  const handleChange = (value: string) => {
    setSearchWord(value)
  }

  return value === index
    ? (
      <>
        <SidebarSearchForm changeEvent={handleChange} />
        <SidebarTalkList data={friendData} />
      </>
    )
    : null
};

export default SidebarTalkPanel;
