import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from './styles/theme';

// Authentication Components
import Auth from "./providers/Auth";
import AuthPage from "./components/templates/AuthPage";

// Page Components
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import ProfileEdit from './components/pages/ProfileEdit';
import Chat from "./components/pages/Chat";

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Auth>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <AuthPage>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile/edit" component={ProfileEdit} />
                <Route path="/chat/:roomId" component={Chat} />
                <Route path="/profile/:userId" component={Profile} />
              </Switch>
            </AuthPage>
          </Switch>
        </BrowserRouter>
      </Auth>
    </Provider>
  </MuiThemeProvider>
);

export default App;
