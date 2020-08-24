import React from 'react';
import {List} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";

type Props = {
  children: React.ReactNode;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      overflow: "auto",
      flexGrow: 1
    }
  })
)

const SidebarListContainer: React.FC<Props>= ({children}) => {
  const classes = useStyles()

  return (
    <List disablePadding component="div" className={classes.root}>
      {children}
    </List>
  );
};

export default SidebarListContainer;

