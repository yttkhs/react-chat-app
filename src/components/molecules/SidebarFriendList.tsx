import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import SidebarListContainer from './SidebarListContainer';
import {UserDataFriendProperties} from "../../types";

type Props = {
  data: UserDataFriendProperties[]
}

const SidebarFriendList: React.FC<Props> = ({data}) => {
  return (
    <SidebarListContainer>
      {data.map((value, index) => (
        <ListItem alignItems="flex-start" button key={index}>
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText primary={value.displayName} secondary={value.biography} />
        </ListItem>
      ))}
    </SidebarListContainer>
  )
};

export default SidebarFriendList;
