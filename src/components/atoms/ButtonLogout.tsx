import React, {useContext} from 'react';
import firebase from "../../lib/firebase";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthContext} from "../../providers/Auth";

type Props = {
  history: RouteComponentProps["history"]
}

const ButtonLogout: React.FC<Props> = ({history}) => {
  const {logout} = useContext(AuthContext)

  const handleLogout = () => {
    firebase.auth()
      .signOut()
      .then(() => {
        logout()
        history.push("/login");
      })
      .catch(error => alert(error))
  }

  return (
    <button onClick={handleLogout}>LOGOUT</button>
  );
};

export default withRouter(ButtonLogout);
