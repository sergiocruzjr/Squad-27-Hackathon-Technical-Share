// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkWQlhZLeVV-D81ssUbhI6ZCig7IH2aww",
  authDomain: "squad27-86f6b.firebaseapp.com",
  databaseURL: "https://squad27-86f6b-default-rtdb.firebaseio.com",
  projectId: "squad27-86f6b",
  storageBucket: "squad27-86f6b.appspot.com",
  messagingSenderId: "926596216579",
  appId: "1:926596216579:web:e4d6fea444930e05701b36",
  measurementId: "G-H56ZGJ9E4X"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const database = getDatabase(fireBaseApp);

export { database, set, ref, get, child };