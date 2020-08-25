import React from 'react';
import {Link} from 'react-router-dom'
import ButtonLogout from "../atoms/ButtonLogout";

type Props = {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <p>HOME</p>
      <Link to='/profile'>PROFILE</Link>
      <ButtonLogout />
    </div>
  );
};

export default Home;
