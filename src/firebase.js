// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABnLCG7bwgQFYim07kLMv0vwJsR-KCRM",
  authDomain: "react-todo-app-ec212.firebaseapp.com",
  projectId: "react-todo-app-ec212",
  storageBucket: "react-todo-app-ec212.appspot.com",
  messagingSenderId: "1058548746576",
  appId: "1:1058548746576:web:c26f3debf8ff092edb8455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app