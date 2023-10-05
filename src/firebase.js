// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXz-f-WaSR1hORpIeLl-tWFgou7HKJZJ8",
  authDomain: "fir-chat-app-75b19.firebaseapp.com",
  projectId: "fir-chat-app-75b19",
  storageBucket: "fir-chat-app-75b19.appspot.com",
  messagingSenderId: "607437364922",
  appId: "1:607437364922:web:1c84e84685a96b44696c83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage();