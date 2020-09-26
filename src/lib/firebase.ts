import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.react_app_api_key,
  authDomain: process.env.react_app_auth_domain,
  databaseURL: process.env.react_app_database_url,
  projectId: process.env.react_app_project_id,
  storageBucket: process.env.react_app_storage_bucket,
  messagingSenderId: process.env.react_app_messaging_sender_id,
  appId: process.env.react_app_app_id,
  measurementId: process.env.react_app_measurement_id,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
