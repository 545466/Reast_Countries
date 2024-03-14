// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLBSj8RNkdzi_-jLtTec_WA2FOVcWJxpQ",
  authDomain: "fir-learn-712e0.firebaseapp.com",
  projectId: "fir-learn-712e0",
  storageBucket: "fir-learn-712e0.appspot.com",
  messagingSenderId: "988472511375",
  appId: "1:988472511375:web:9632ef18b06473987f59fa",
  measurementId: "G-K172D6Y49Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);