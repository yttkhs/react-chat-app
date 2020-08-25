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
  const [searchWord, setSearchWord] = useState<string>("")
  const [friendData, setFriendData] = useState<UserDataFriendProperties[]>([])

  const handleChange = (value: string) => {
    setSearchWord(value)
  }

  useEffect(() => {

    // Raw friend data
    const originalData = createFriendDataList(userData.friend)

    // Filter search word and display name by prefix match
    const filteredData = originalData.filter(value => value.displayName.startsWith(searchWord))

    if (searchWord === "") {
      setFriendData(originalData)
    } else {
      setFriendData(filteredData)
    }
  }, [searchWord, userData])

  return value === index
    ? (
      <>
        <SidebarFriendSearchForm changeEvent={handleChange} />
        <SidebarFriendList data={friendData} />
      </>
    )
    : null
};

export default SidebarFriendPanel;
