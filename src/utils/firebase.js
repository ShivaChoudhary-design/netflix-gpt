// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuCGsDvVBeGn7lLvvbwUcY86bZM8lPkek",
  authDomain: "netflixgpt-77c6d.firebaseapp.com",
  projectId: "netflixgpt-77c6d",
  storageBucket: "netflixgpt-77c6d.appspot.com",
  messagingSenderId: "971148851433",
  appId: "1:971148851433:web:c617a88c847f573b451878",
  measurementId: "G-4YSER3XTR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
