import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import { RootState, UserDataProperties } from '../../types';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 0)
    },
  })
)

const Profile: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List disablePadding>
        <ListItem dense>
          <ListItemText primary="USER ID" secondary={userData.userId} />
        </ListItem>
        <ListItem dense>
          <ListItemText primary="USER NAME" secondary={userData.displayName} />
        </ListItem>
        <ListItem dense>
          <ListItemText primary="EMAIL" secondary={userData.email} />
        </ListItem>
        <ListItem dense>
          <ListItemText primary="BIOGRAPHY" secondary={userData.biography} />
        </ListItem>
      </List>
      <Link to="/profile/edit">Edit Profile</Link>
    </div>
  );
};

export default Profile;
