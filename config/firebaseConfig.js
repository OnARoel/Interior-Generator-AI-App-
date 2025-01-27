// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "interior-generator.firebaseapp.com",
  projectId: "interior-generator",
  storageBucket: "interior-generator.firebasestorage.app",
  messagingSenderId: "204274984993",
  appId: "1:204274984993:web:deda5481637084e8595b60",
  measurementId: "G-BW9Y80BP8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
