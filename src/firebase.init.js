// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB83J0YQuyu42qGPLOq9xrSqnEaEX0yLkM",
  authDomain: "sosc-assignment.firebaseapp.com",
  projectId: "sosc-assignment",
  storageBucket: "sosc-assignment.appspot.com",
  messagingSenderId: "567932604971",
  appId: "1:567932604971:web:72ef4f476be5210890906e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
