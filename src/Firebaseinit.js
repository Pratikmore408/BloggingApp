// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKTpUbizMwQ4U4puRJidRnYe2bCJpK5G8",
  authDomain: "my-blogging-app-3cc5b.firebaseapp.com",
  projectId: "my-blogging-app-3cc5b",
  storageBucket: "my-blogging-app-3cc5b.appspot.com",
  messagingSenderId: "844220202356",
  appId: "1:844220202356:web:344a5733bce48d2fafc021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};