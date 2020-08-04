import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Composition for Authentication
import AuthRedirectLogin from "./helpers/AuthRedirectLogin";

// Page Components
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App: React.FC = () => (
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
);

export default App;
