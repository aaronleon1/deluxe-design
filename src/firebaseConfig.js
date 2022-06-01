import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBSKGuaMzYTYLJCXXn0RwomzjZjlMY9gJU",

  authDomain: "deluxe-design.firebaseapp.com",

  databaseURL: "https://deluxe-design-default-rtdb.firebaseio.com",

  projectId: "deluxe-design",

  storageBucket: "deluxe-design.appspot.com",

  messagingSenderId: "617951181579",

  appId: "1:617951181579:web:44a2193bd3ef992ea5400e",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
