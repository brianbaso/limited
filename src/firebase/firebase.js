// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc_8tX2AytyH4rV1n7EFMX-ptNWaAUEuQ",
  authDomain: "limited-d4697.firebaseapp.com",
  projectId: "limited-d4697",
  storageBucket: "limited-d4697.appspot.com",
  messagingSenderId: "1056396442755",
  appId: "1:1056396442755:web:ae87cf3e5d6c153593efb6",
  measurementId: "G-ZFK4FPQG4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
