import React from 'react';
import {Link} from 'react-router-dom'
import ButtonLogout from "../atoms/ButtonLogout";
import SearchUserData from "../organisms/SearchUserData";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import { UserDataProperties } from '../../types';

type Props = {}

const Home: React.FC<Props> = () => {
  const {userId} = useSelector<RootState, UserDataProperties>(({userData}) => userData)

  return (
    <div>
      <p>HOME</p>
      <SearchUserData />
      <Link to={userId}>PROFILE</Link>
      <ButtonLogout />
    </div>
  );
};

export default Home;
