import firebase from '../lib/firebase';
import { createBrowserHistory } from 'history';

const signOutAuth = (): void => {
  const history = createBrowserHistory();

  firebase
    .auth()
    .signOut()
    .then(() => {
      history.push('/');
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default signOutAuth;
