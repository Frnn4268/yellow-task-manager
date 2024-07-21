// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCQgrOQtLb4lQ1ERh-ANLfGLbs4s6qZzM",
  authDomain: "task-manager-f6d78.firebaseapp.com",
  projectId: "task-manager-f6d78",
  storageBucket: "task-manager-f6d78.appspot.com",
  messagingSenderId: "704865808315",
  appId: "1:704865808315:web:8b1c2bf3865c9395eede9e",
  measurementId: "G-6K0TT5VJXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
