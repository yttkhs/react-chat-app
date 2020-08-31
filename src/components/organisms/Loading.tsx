import React from 'react';
import {CircularProgress} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2)
    }
  })
)

const Loading: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
