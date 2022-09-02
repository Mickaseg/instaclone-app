// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhX3ce5v2hS5tZWbNwtvydO9LOWSYB1xQ",
  authDomain: "instaclone-ab2ea.firebaseapp.com",
  projectId: "instaclone-ab2ea",
  storageBucket: "instaclone-ab2ea.appspot.com",
  messagingSenderId: "479198333411",
  appId: "1:479198333411:web:1d5869c1fb5eedea7838d6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
