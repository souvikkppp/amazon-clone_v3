import firebase from "firebase"
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app"
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDDHGVeu9Q04RXBjJFmU1tcJPWof20tsk",
    authDomain: "clone2-ec4a5.firebaseapp.com",
    projectId: "clone2-ec4a5",
    storageBucket: "clone2-ec4a5.appspot.com",
    messagingSenderId: "24404941146",
    appId: "1:24404941146:web:f72cc28bc816bd5dc2fb63"
  };

  
  const app = firebase.initializeApp(firebaseConfig)//initialize our firebase