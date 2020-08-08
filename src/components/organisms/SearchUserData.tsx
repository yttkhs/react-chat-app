import React from 'react';
import {searchClient} from "../../lib/algolia";
import {InstantSearch} from "react-instantsearch-dom";
import HitsUserData from "../molecules/HitsUserData";
import SearchBoxUserData from "../molecules/SearchBoxUserData";

const SearchUserData: React.FC = () => (
  <InstantSearch indexName="users" searchClient={searchClient}>
    <SearchBoxUserData />
    <HitsUserData />
  </InstantSearch>
);

export default SearchUserData;
