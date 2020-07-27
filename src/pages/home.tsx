import React from 'react';
import firebase from 'firebase'

const Home: React.FC = () => {
  const handleLogout = () => {
    firebase.auth().signOut().then(() => null);
  }

  return (
    <div>
      <p>HOME</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Home;
