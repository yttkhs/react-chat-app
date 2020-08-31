import React from 'react';
import {Link} from 'react-router-dom'
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import SidebarListContainer from "./SidebarListContainer";
import {UserDataFriendProperties} from "../../types";

type Props = {
  data: UserDataFriendProperties[]
}

const SidebarTalkList: React.FC<Props> = ({data}) => {
  return (
    <SidebarListContainer>
      {data.map((value, index) => (
        <ListItem
          component={Link}
          to={'/chat/' + value.roomId}
          alignItems={value.lastChatLog?.text ? "flex-start" : "center"}
          key={index}
          button
        >
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={value.displayName}
            secondary={value.lastChatLog?.text && value.lastChatLog.text}
          />
        </ListItem>
      ))}
    </SidebarListContainer>
  )
};

export default SidebarTalkList;
