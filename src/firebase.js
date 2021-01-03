import firebase from 'firebase/app';
import 'firebase/database';


const config= {
    apiKey: "AIzaSyCYe3vdEwFKMxDVc3CqfV0Zn9c4CE0h6QQ",
    authDomain: "trial-firebase-database.firebaseapp.com",
    databaseURL: "https://trial-firebase-database-default-rtdb.firebaseio.com",
    projectId: "trial-firebase-database",
    storageBucket: "trial-firebase-database.appspot.com",
    messagingSenderId: "325412280646",
    appId: "1:325412280646:web:79e65e4be6e5086e486d47",
    measurementId: "G-CB9DMCC3P9"
  };



firebase.initializeApp(config);

export const database= firebase.database();

export default firebase;
