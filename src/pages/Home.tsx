import React from 'react';
import {withRouter, RouteComponentProps, Link} from 'react-router-dom'
import firebase from '../lib/firebase'

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
      <Link to="/profile">PROFILE</Link>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default withRouter(Home);
