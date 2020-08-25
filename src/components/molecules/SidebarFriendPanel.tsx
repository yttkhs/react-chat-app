import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import SidebarFriendList from "./SidebarFriendList";
import SidebarFriendSearchForm from './SidebarFriendSearchForm';
import createFriendDataList from "../../modules/createFriendDataList";
import {
  RootState,
  SidebarPanelComponent,
  UserDataProperties,
  UserDataFriendProperties
} from '../../types';

const SidebarFriendPanel: React.FC<SidebarPanelComponent> = ({value, index}) => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const friendData = createFriendDataList(userData.friend)
  const [searchWord, setSearchWord] = useState<string>("")
  const [filteredData, setFilteredData] = useState<UserDataFriendProperties[]>([])

  const handleChange = (value: string) => {
    setSearchWord(value)
  }

  useEffect(() => {
    // Filter search word and display name by prefix match
    const filtered = friendData.filter(value => value.displayName.startsWith(searchWord))

    setFilteredData(filtered)
  }, [searchWord])

  return value === index
    ? (
      <>
        <SidebarFriendSearchForm changeEvent={handleChange} />
        <SidebarFriendList data={
          searchWord === ""
            ? friendData
            : filteredData
        } />
      </>
    )
    : null
};

export default SidebarFriendPanel;
