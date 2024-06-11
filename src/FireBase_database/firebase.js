// Import the functions you need from the SDKs you need
// import { FirebaseError, initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyjLL7EM9T3UoFWCYSl18P-lF-5hQYK6I",
  authDomain: "bst-visualizer-1155.firebaseapp.com",
  projectId: "bst-visualizer-1155",
  storageBucket: "bst-visualizer-1155.appspot.com",
  messagingSenderId: "698873572886",
  appId: "1:698873572886:web:dcb8baa959033ef95b4f37",
  //measurementId: "G-VC32NC9R94"

};

// Initialize Firebase
const app= firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
export default app;
export const  db=getFirestore(app);
// export const dataBaseRef=firebase.database();
// const analytics = getAnalytics(app);