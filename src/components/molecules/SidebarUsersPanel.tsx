import React from 'react';
import SidebarUsersSearchForm from './SidebarUsersSearchForm';
import SidebarUsersList from "./SidebarUsersList";
import { SidebarPanelComponent } from '../../types';
import {algoliaClient} from "../../lib/algolia";
import {InstantSearch} from "react-instantsearch-dom";

const SidebarUsersPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  return value === index
    ? (
      <InstantSearch indexName="users" searchClient={algoliaClient}>
        <SidebarUsersSearchForm />
        <SidebarUsersList />
      </InstantSearch>
    )
    : null
};

export default SidebarUsersPanel;
