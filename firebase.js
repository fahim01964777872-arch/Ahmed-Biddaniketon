// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ON23dzRy57s1ZfpLEIpM4wyRN8oUN0w",
  authDomain: "ahmed-biddaniketon.firebaseapp.com",
  projectId: "ahmed-biddaniketon",
  storageBucket: "ahmed-biddaniketon.firebasestorage.app",
  messagingSenderId: "1092422968703",
  appId: "1:1092422968703:web:b0f24f04521a45ed47a64a",
  measurementId: "G-ECM2RB1E3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
