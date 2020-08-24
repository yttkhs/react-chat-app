import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
)

const TheHeader: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar} aria-label="Global Header">
      <Toolbar>
        <Typography variant="h4">REACT CHAT APP</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
