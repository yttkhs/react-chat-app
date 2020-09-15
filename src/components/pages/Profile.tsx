import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {RootState, UserDataProperties} from '../../types';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Table, TableContainer, TableRow, TableCell, TableBody, Paper, Button} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  })
)

const Profile: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>USER ID</TableCell>
                <TableCell>{userData.userId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>USER NAME</TableCell>
                <TableCell>{userData.displayName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>EMAIL</TableCell>
                <TableCell>{userData.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BIOGRAPHY</TableCell>
                <TableCell>{userData.biography}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button
        component={Link}
        to="/profile/edit"
        color="primary"
        variant="contained"
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default Profile;
