import React from 'react';
import {Link} from 'react-router-dom'
import ButtonLogout from "../atoms/ButtonLogout";
import SearchUserData from "../organisms/SearchUserData";

type Props = {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <p>HOME</p>
      <SearchUserData />
      <Link to='/profile'>PROFILE</Link>
      <ButtonLogout />
    </div>
  );
};

export default Home;
