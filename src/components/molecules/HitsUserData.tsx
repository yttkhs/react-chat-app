import React from "react";
import {Hit} from "react-instantsearch-core";
import {connectHits} from "react-instantsearch-dom";
import ButtonFriendRegister from "../atoms/ButtonFriendRegister";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {State as FriendDataState} from '../../store/storeFriendData'
import {State as UserDataState} from "../../store/storeUserData";

type Props = {
  hits: Hit[];
}

const CustomHits: React.FC<Props> = ({hits}) => {
  const userData = useSelector<RootState, UserDataState>(({userData}) => userData)
  const friendData = useSelector<RootState, FriendDataState>(({friendData}) => friendData)

  // Narrow down to users other than yourself
  const userList = hits.filter(h => h.userId !== userData.userId)

  return (
    <ul>
      {userList.map((h) => (
        <li key={h.userId}>
          <div>{h.displayName}</div>
          <div>{h.userId}</div>
          {
            friendData.includes(h.userId)
              ? <p>友達登録済み</p>
              : <ButtonFriendRegister hits={h} />
          }
        </li>
      ))}
    </ul>
  )
}

export default connectHits(CustomHits)
