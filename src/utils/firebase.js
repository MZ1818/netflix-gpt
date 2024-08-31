// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-becb2.firebaseapp.com",
  projectId: "netflix-gpt-becb2",
  storageBucket: "netflix-gpt-becb2.appspot.com",
  messagingSenderId: "453033117354",
  appId: "1:453033117354:web:34a57cb7a09615a18932d3",
  measurementId: "G-2B8ZXKTTVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
