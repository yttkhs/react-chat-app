import React from 'react';
import {TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchForm: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    searchField: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
)

const SidebarFriendSearchForm: React.FC = () => {
  const classes = useStyles()

  return (
    <form className={classes.searchForm} autoComplete="off" noValidate>
      <TextField
        className={classes.searchField}
        placeholder="Search Name"
        margin="dense"
        variant="outlined"
        fullWidth
      />
    </form>
  );
};

export default SidebarFriendSearchForm;
