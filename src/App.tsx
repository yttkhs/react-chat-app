import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

// Page Components
import Auth from "./pages/auth";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Auth>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Auth>
    </Switch>
  </Router>
);

export default App;
