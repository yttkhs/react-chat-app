import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute: React.FC<RouteProps> = ({ exact, path, component }) => {
  const auth = useAuth();

  return auth ? (
    <Route exact={exact} component={component} path={path} />
  ) : (
    <Redirect to="/sign-in" />
  );
};

export default PrivateRoute;
