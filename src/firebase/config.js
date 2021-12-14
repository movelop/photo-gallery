import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: "photogram-baa3c.firebaseapp.com",
    projectId: "photogram-baa3c",
    storageBucket: "photogram-baa3c.appspot.com",
    messagingSenderId: "75783692839",
    appId: "1:75783692839:web:aa82ab43bb9bdf834e2402"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
   export {
       projectStorage,
       projectFirestore,
       timestamp,
   };