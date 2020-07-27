import React from 'react';
import firebase from '../lib/firebase'
import {withRouter, RouteComponentProps} from 'react-router-dom'

type Props = {
  history: RouteComponentProps["history"]
}

const Home: React.FC<Props> = ({history}) => {

  const handleLogout = () => {
    firebase.auth()
      .signOut()
      .then(() => history.push("/login"))
      .catch(error => alert(error))
  }

  return (
    <div>
      <p>HOME</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default withRouter(Home);
