import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import SidebarListContainer from "./SidebarListContainer";

const SidebarTalkList: React.FC= () => {

  return (
    <SidebarListContainer>
      <ListItem alignItems="flex-start" button>
        <ListItemAvatar>
          <Avatar>H</Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Friend Name'} secondary={'ChatText ChatText ChatText ChatText'} />
      </ListItem>
    </SidebarListContainer>
  );
};

export default SidebarTalkList;
