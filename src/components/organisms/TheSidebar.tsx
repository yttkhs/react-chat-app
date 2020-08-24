import React, {useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Drawer, Toolbar, Divider} from '@material-ui/core'
import SidebarTabs from "../molecules/SidebarTabs";
import SidebarFriendPanel from "../molecules/SidebarFriendPanel";
import SidebarTalkPanel from "../molecules/SidebarTalkPanel";
import SidebarUsersPanel from "../molecules/SidebarUsersPanel";

const drawerWidth = 300

const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    }
  })
)

const TheSidebar: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Drawer
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <SidebarTabs value={value} changeEvent={handleChange} />
      <Divider />
      <SidebarFriendPanel value={value} index={0} />
      <SidebarTalkPanel value={value} index={1} />
      <SidebarUsersPanel value={value} index={2} />
    </Drawer>
  );
};

export default TheSidebar;
