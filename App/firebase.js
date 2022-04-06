import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArroFJSUfzAt6DCU5Y9B1gxehTB9_XGd4",
  authDomain: "exchange4students-2aa17.firebaseapp.com",
  projectId: "exchange4students-2aa17",
  storageBucket: "exchange4students-2aa17.appspot.com",
  messagingSenderId: "881356251494",
  appId: "1:881356251494:web:fa635d4d38fb04949768a7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;