import React from 'react';
import SidebarTalkSearchForm from './SidebarTalkSearchForm';
import SidebarTalkList from "./SidebarTalkList";
import {SidebarPanelComponent} from "../../types";

const SidebarTalkPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  return value === index
    ? (
      <>
        <SidebarTalkSearchForm />
        <SidebarTalkList />
      </>
    )
    : null
};

export default SidebarTalkPanel;
