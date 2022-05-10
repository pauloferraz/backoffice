// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_rSu-dU6T4Rd-_XFtPT5eYiZPNdPkQWo",
  authDomain: "backoffice-ab6ca.firebaseapp.com",
  projectId: "backoffice-ab6ca",
  storageBucket: "backoffice-ab6ca.appspot.com",
  messagingSenderId: "897458131554",
  appId: "1:897458131554:web:736945a087149b9345f73b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
