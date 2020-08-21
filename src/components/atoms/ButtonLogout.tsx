import React, {useContext} from 'react';
import firebase from "../../lib/firebase";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthContext} from "../../providers/Auth";
import Button from '@material-ui/core/Button';

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
    <Button variant="contained" color="primary" onClick={handleLogout}>LOGOUT</Button>
  );
};

export default withRouter(ButtonLogout);
