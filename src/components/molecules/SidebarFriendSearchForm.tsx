import React from 'react';
import {TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

type Props = {
  changeEvent: (value: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchForm: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    searchField: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
  })
)

const SidebarFriendSearchForm: React.FC<Props> = ({changeEvent}) => {
  const classes = useStyles()

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classes.searchForm}
      autoComplete="off"
      noValidate
    >
      <TextField
        className={classes.searchField}
        placeholder="Search Name"
        margin="dense"
        variant="outlined"
        fullWidth
        onChange={(event) => {
          changeEvent(event.target.value)
        }}
      />
    </form>
  );
};

export default SidebarFriendSearchForm;
