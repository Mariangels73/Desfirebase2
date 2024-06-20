import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6I6Xaeov6D0s24L9t0eahJ6geRYZFU0Y",
  authDomain: "desafiofirebaseii.firebaseapp.com",
  projectId: "desafiofirebaseii",
  storageBucket: "desafiofirebaseii.appspot.com",
  messagingSenderId: "595145062070",
  appId: "1:595145062070:web:0f9bbe67fc2399b10e1817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
