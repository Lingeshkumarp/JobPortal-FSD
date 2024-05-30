// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKcI80_R1N4AgfKjiogWg7HQ0GMszs9P0",
  authDomain: "jobapplication-otp.firebaseapp.com",
  projectId: "jobapplication-otp",
  storageBucket: "jobapplication-otp.appspot.com",
  messagingSenderId: "10412736057",
  appId: "1:10412736057:web:287fdeddcffa62773197e8",
  measurementId: "G-82D72JWQHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);