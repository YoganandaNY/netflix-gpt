// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKKOyqMDdTPfm98SYEf_Oe3fF0KPrnbjI",
  authDomain: "netflixgpt-26e84.firebaseapp.com",
  projectId: "netflixgpt-26e84",
  storageBucket: "netflixgpt-26e84.appspot.com",
  messagingSenderId: "454875986809",
  appId: "1:454875986809:web:a292f55a0a133bf9670da8",
  measurementId: "G-QRSLHLQSDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
