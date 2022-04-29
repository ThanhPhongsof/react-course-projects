import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdpQ4sW6LhnaANOQOgJJZImO0FWC0Ar70",
  authDomain: "monkey-blogging-da39c.firebaseapp.com",
  projectId: "monkey-blogging-da39c",
  storageBucket: "monkey-blogging-da39c.appspot.com",
  messagingSenderId: "1089989654619",
  appId: "1:1089989654619:web:f211b6c6805ab03926a77e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
