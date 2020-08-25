import React from 'react';
import {useSelector} from "react-redux";
import {Hit} from "react-instantsearch-core";
import {connectHits} from "react-instantsearch-dom";
import createFriendIdList from "../../modules/createFriendIdList";
import SidebarListContainer from './SidebarListContainer';
import {Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, IconButton} from "@material-ui/core";
import {RootState, UserDataProperties} from "../../types";
import ButtonFriendRegister from "../atoms/ButtonFriendRegister";
import {CheckCircle} from "@material-ui/icons";

type Props = {
  hits: Hit[];
}

const SidebarUsersList: React.FC<Props> = ({hits}) => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)

  // Narrow down to users other than yourself
  const userList = hits.filter(h => h.userId !== userData.userId)

  // Create a friend ID list
  const friendIdList = createFriendIdList(userData.friend)

  return (
    <SidebarListContainer>
      {userList.map((value, index) => (
        <ListItem alignItems="flex-start" button key={index}>
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText primary={value.displayName} secondary={value.biography} />
          <ListItemSecondaryAction>
            {
              friendIdList.includes(value.userId)
                ? (
                  <IconButton edge="end" disabled>
                    <CheckCircle />
                  </IconButton>
                )
                : <ButtonFriendRegister hits={value} />
            }
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </SidebarListContainer>
  );
};

export default connectHits(SidebarUsersList);
