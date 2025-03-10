// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnirONHc6Z9tgMEwwqomhrXEWtEH8tIpk",
  authDomain: "clone-54c23.firebaseapp.com",
  projectId: "clone-54c23",
  storageBucket: "clone-54c23.firebasestorage.app",
  messagingSenderId: "804207273892",
  appId: "1:804207273892:web:7a52078a3b13556da28331",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
