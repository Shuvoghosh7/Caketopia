// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCblhTR5LWeHJlWZ9nX5YVJTyjHkWqAGkI",
  authDomain: "caketopia-be176.firebaseapp.com",
  projectId: "caketopia-be176",
  storageBucket: "caketopia-be176.appspot.com",
  messagingSenderId: "448777632158",
  appId: "1:448777632158:web:2296838d98312e1f407e8f",
  measurementId: "G-3W20FVKFBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;