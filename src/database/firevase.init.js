// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zgiyeQr5fk9fao5Dy6rhoPbgje3z_bc",
  authDomain: "lastexam-5d13e.firebaseapp.com",
  projectId: "lastexam-5d13e",
  storageBucket: "lastexam-5d13e.firebasestorage.app",
  messagingSenderId: "1031465476819",
  appId: "1:1031465476819:web:784db0b76b586f30c8aa26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };