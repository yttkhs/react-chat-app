import firebase from '../lib/firebase';

const signInAuth = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithRedirect(provider)
    .catch((error) => {
      console.error(error.message);
    });
};

export default signInAuth;
