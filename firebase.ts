import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chatpdf-3ba8c.firebaseapp.com",
  projectId: "chatpdf-3ba8c",
  storageBucket: "chatpdf-3ba8c.firebasestorage.app",
  messagingSenderId: "950966264467",
  appId: process.env.FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
