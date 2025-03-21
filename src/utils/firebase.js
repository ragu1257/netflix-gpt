// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8EjA9fuZG2pJ9mxL7EgGjE24yVvnVJuI",
  authDomain: "netflixgpt-7af17.firebaseapp.com",
  projectId: "netflixgpt-7af17",
  storageBucket: "netflixgpt-7af17.firebasestorage.app",
  messagingSenderId: "665503921366",
  appId: "1:665503921366:web:fdbb8ed1ceb97802a1c577",
  measurementId: "G-QX7SXS2VCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
