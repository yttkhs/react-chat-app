import React from 'react';
import AuthRedirectHome from "../templates/AuthRedirectHome";
import {Link} from "react-router-dom";

const Index: React.FC = () => (
  <AuthRedirectHome>
    <Link to="/login">LOGIN PAGE</Link>
  </AuthRedirectHome>
);

export default Index;
