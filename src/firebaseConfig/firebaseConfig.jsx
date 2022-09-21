// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmVPTO0nD-m3enatp7T-t85RtW5yMOr5w",
  authDomain: "react-coderhouse-e027d.firebaseapp.com",
  projectId: "react-coderhouse-e027d",
  storageBucket: "react-coderhouse-e027d.appspot.com",
  messagingSenderId: "153449113876",
  appId: "1:153449113876:web:1c2ec496817b8c04ae3a01"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);