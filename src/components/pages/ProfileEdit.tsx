import React from 'react';
import {useSelector} from "react-redux";
import {RootState, UserDataProperties} from "../../types";
import {useForm} from "react-hook-form";
import {UserData} from "../../classes/UserData";
import {Link} from "react-router-dom";
import createFriendIdList from "../../modules/createFriendIdList";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper, Table, TableBody, TableContainer, TableRow, TableCell, Button} from "@material-ui/core";

type Inputs = {
  displayName: string;
  biography: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    },
    paper: {
      marginBottom: theme.spacing(3)
    },
    buttonGroup: {
      display: "flex"
    },
    editButton: {
      marginLeft: theme.spacing(2)
    }
  })
)

const ProfileEdit: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const classes = useStyles()

  // Create a friend ID list
  const friendIdList = createFriendIdList(userData.friend)

  // use React Hook Form
  // Library for form validation
  const {register, handleSubmit, errors} = useForm<Inputs>();

  // Required items for displayName
  const displayNameRegister = register({
    required: true,
    minLength: {
      value: 5,
      message: "Please enter at least 5 characters"
    },
    maxLength: {
      value: 30,
      message: "Please enter the text within 30 characters"
    }
  })

  // Required items for biography
  const biographyRegister = register({
    maxLength: {
      value: 200,
      message: "Enter text up to 200 characters"
    }
  })

  const handleEditProfileSubmit = handleSubmit((values: Inputs): void => {
    new UserData(userData.userId).updateUserData({
      displayName: values.displayName,
      biography: values.biography
    })

    friendIdList.forEach(id => {
      new UserData(id).updateUserData({
        [`friend.${userData.userId}.displayName`]: values.displayName,
        [`friend.${userData.userId}.biography`]: values.biography
      })
    })
  })

  return (
    <div className={classes.root}>
      <form onSubmit={handleEditProfileSubmit}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <label htmlFor="name">USER NAME</label>
                  </TableCell>
                  <TableCell>
                    <input
                      id="name"
                      type="text"
                      name="displayName"
                      defaultValue={userData.displayName}
                      ref={displayNameRegister}
                    />
                    {errors.displayName && <p>{errors.displayName?.message}</p>}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <label htmlFor="biography">BIOGRAPHY</label>
                  </TableCell>
                  <TableCell>
                    <textarea
                      id="biography"
                      name="biography"
                      defaultValue={userData.biography}
                      ref={biographyRegister}
                    />
                    {errors.biography && <p>{errors.biography?.message}</p>}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div className={classes.buttonGroup}>
          <Button component={Link} to={"/profile/" + userData.userId} variant="contained">Back Profile</Button>
          <Button className={classes.editButton} variant="contained" color="primary" type="submit">EDIT</Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
