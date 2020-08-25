import React from 'react';
import SidebarUsersSearchForm from './SidebarUsersSearchForm';
import SidebarUsersList from "./SidebarUsersList";
import { SidebarPanelComponent } from '../../types';
import {searchClient} from "../../lib/algolia";
import {InstantSearch} from "react-instantsearch-dom";

const SidebarUsersPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  return value === index
    ? (
      <InstantSearch indexName="users" searchClient={searchClient}>
        <SidebarUsersSearchForm />
        <SidebarUsersList />
      </InstantSearch>
    )
    : null
};

export default SidebarUsersPanel;
