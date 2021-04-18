import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const firebaseInstance = firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();

export const analytics = firebase.analytics();

export default firebaseInstance;
