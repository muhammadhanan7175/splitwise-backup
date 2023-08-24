import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
;

const firebaseConfig = {
  apiKey: "AIzaSyAKrfGjJ3v8yWP1X0dgK7VvRKx4yMGk3sQ",
  authDomain: "test-b30e8.firebaseapp.com",
  projectId: "test-b30e8",
  storageBucket: "test-b30e8.appspot.com",
  messagingSenderId: "685115009695",
  appId: "1:685115009695:web:ca4466ed766260225350aa",
  measurementId: "G-RPJXCSJBPC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const db = firebase.firestore()