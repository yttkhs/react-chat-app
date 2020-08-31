import React, {useContext} from 'react';
import firebase from "../../lib/firebase";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthContext} from "../../providers/Auth";
import {MenuItem} from "@material-ui/core";

type Props = {
  history: RouteComponentProps["history"]
}

const ButtonLogout: React.FC<Props> = ({history}) => {
  const {logoutFirebaseAuth} = useContext(AuthContext)

  const handleLogout = () => {
    firebase.auth()
      .signOut()
      .then(() => {
        logoutFirebaseAuth()
        history.push("/login");
      })
      .catch(error => alert(error))
  }

  return (
    <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
  );
};

export default withRouter(ButtonLogout);
