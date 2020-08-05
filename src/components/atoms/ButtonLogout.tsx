import React from 'react';
import firebase from "../../lib/firebase";
import {RouteComponentProps, withRouter} from "react-router-dom";

type Props = {
  history: RouteComponentProps["history"]
}

const ButtonLogout: React.FC<Props> = ({history}) => {

  const handleLogout = () => {
    firebase.auth()
      .signOut()
      .then(() => history.push("/login"))
      .catch(error => alert(error))
  }

  return (
    <button onClick={handleLogout}>LOGOUT</button>
  );
};

export default withRouter(ButtonLogout);
