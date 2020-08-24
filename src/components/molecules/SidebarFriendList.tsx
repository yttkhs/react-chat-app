import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {useSelector} from "react-redux";
import SidebarListContainer from './SidebarListContainer';
import {RootState, UserDataProperties} from "../../types";

const SidebarFriendList: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const friendData = Object.entries(userData.friend).map((value => value[1]))

  return (
    <SidebarListContainer>
      {friendData.map((value, index) => (
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
