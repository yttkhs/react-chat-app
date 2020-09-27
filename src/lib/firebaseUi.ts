import firebase from './firebase';

export const uiConfig = {
  // signInFlow: 'popup',
  signInSuccessUrl: '/board',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
