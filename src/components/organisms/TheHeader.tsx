import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import HeaderMenu from "../molecules/HeaderMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1
    }
  })
)

const TheHeader: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar} aria-label="Global Header">
      <Toolbar>
        <Typography className={classes.title} variant="h4">REACT CHAT APP</Typography>
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
