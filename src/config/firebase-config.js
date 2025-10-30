// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // ATENÇÃO: O Firebase Dynamic Links JÁ FOI DESCONTINUADO.
  // A partir de 25 de agosto de 2025, este serviço não está mais disponível.
  apiKey: "AIzaSyBWmZQBPNsQsFWuKEMCR3t8EjDooHKcimc",
  authDomain: "token-base-fe7f8.firebaseapp.com",
  databaseURL: "https://token-base-fe7f8-default-rtdb.firebaseio.com",
  projectId: "token-base-fe7f8",
  storageBucket: "token-base-fe7f8.firebasestorage.app",
  messagingSenderId: "437051104089",
  appId: "1:437051104089:web:f4cf31e06c75b50168ca48",
  measurementId: "G-6XJWW2E7DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };







// ATENÇÃO: O Firebase Dynamic Links JÁ FOI DESCONTINUADO.
// A partir de 25 de agosto de 2025, este serviço não está mais disponível.