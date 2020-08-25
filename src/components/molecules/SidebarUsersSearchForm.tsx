import React from 'react';
import {SearchBoxProvided} from "react-instantsearch-core";
import {connectSearchBox} from 'react-instantsearch-dom';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchForm: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    searchField: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
)

const SidebarUsersSearchForm: React.FC<SearchBoxProvided> = ({currentRefinement, refine}) => {
  const classes = useStyles()

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={classes.searchForm}
      autoComplete="off"
      role="search"
      noValidate
    >
      <TextField
        className={classes.searchField}
        placeholder="Search Name"
        margin="dense"
        variant="outlined"
        fullWidth
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </form>
  );
};

export default connectSearchBox(SidebarUsersSearchForm);
