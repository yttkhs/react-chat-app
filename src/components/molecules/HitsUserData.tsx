import React from "react";
import {Hit} from "react-instantsearch-core";
import {connectHits} from "react-instantsearch-dom";
import ButtonFriendRegister from "../atoms/ButtonFriendRegister";
import {useSelector} from "react-redux";
import { RootState, UserDataProperties } from "../../types";

type Props = {
  hits: Hit[];
}

const CustomHits: React.FC<Props> = ({hits}) => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)

  // Narrow down to users other than yourself
  const userList = hits.filter(h => h.userId !== userData.userId)

  // Create a friend ID list
  const friendList = Object.entries(userData.friend).map(v => v[0])

  return (
    <ul>
      {userList.map((h) => (
        <li key={h.userId}>
          <div>{h.displayName}</div>
          <div>{h.userId}</div>
          {
            friendList.includes(h.userId)
              ? <p>友達登録済み</p>
              : <ButtonFriendRegister hits={h} />
          }
        </li>
      ))}
    </ul>
  )
}

export default connectHits(CustomHits)
