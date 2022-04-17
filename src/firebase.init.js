// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2485CSehxPrCQ5U2fEliwJhxQHIIQlQ0",
  authDomain: "online-it-service.firebaseapp.com",
  projectId: "online-it-service",
  storageBucket: "online-it-service.appspot.com",
  messagingSenderId: "687206105968",
  appId: "1:687206105968:web:9dd97f8a1183e02be0c5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth