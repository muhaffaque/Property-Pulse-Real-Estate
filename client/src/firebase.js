// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-74a23.firebaseapp.com",
  projectId: "mern-estate-74a23",
  storageBucket: "mern-estate-74a23.appspot.com",
  messagingSenderId: "1072108697109",
  appId: "1:1072108697109:web:265cb64cc26e6a757b801c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);