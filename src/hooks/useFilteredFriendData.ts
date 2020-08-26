import {useEffect, useState} from "react";
import createFriendDataList from "../modules/createFriendDataList";
import {useSelector} from "react-redux";
import {RootState, UserDataFriendProperties, UserDataProperties} from "../types";

const useFilteredFriendData = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const [searchWord, setSearchWord] = useState<string>("")
  const [friendData, setFriendData] = useState<UserDataFriendProperties[]>([])

  useEffect(() => {
    // Raw friend data
    const originalData = createFriendDataList(userData.friend)

    // Filter search word and display name by prefix match
    const filteredData = originalData.filter(value => {
      return value.displayName.startsWith(searchWord);
    })

    if (searchWord === "") {
      setFriendData(originalData)
    } else {
      setFriendData(filteredData)
    }
  }, [searchWord, userData])

  return [friendData, setSearchWord] as const
}

export default useFilteredFriendData
