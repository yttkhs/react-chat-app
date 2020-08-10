import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Authentication Components
import AuthContextProvider from "./helpers/AuthContextProvider";
import AuthRedirectLogin from "./helpers/AuthRedirectLogin";

// Page Components
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

const App: React.FC = () => (
  <AuthContextProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <AuthRedirectLogin>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </AuthRedirectLogin>
      </Switch>
    </Router>
  </AuthContextProvider>
);

export default App;
