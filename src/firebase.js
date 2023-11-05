// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0dHA0-LUWQPFvLNem4eWdKpfmJLbukNA",
  authDomain: "chat-7986b.firebaseapp.com",
  projectId: "chat-7986b",
  storageBucket: "chat-7986b.appspot.com",
  messagingSenderId: "437317136536",
  appId: "1:437317136536:web:603cdf22d594186acae0ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage();