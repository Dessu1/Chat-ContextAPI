import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmKSlaPY9MRvnHDys3wcRELNrL0KKLWjc",
  authDomain: "chat-1033a.firebaseapp.com",
  databaseURL: "https://chat-1033a.firebaseio.com",
  projectId: "chat-1033a",
  storageBucket: "chat-1033a.appspot.com",
  messagingSenderId: "377832676384",
  appId: "1:377832676384:web:d1b1525a6d83e243b63045",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
