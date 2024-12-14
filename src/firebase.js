// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase, ref, get, set, update} from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3b8-97Gjxu_oq0khdDwI-J9LtcpBqPhE",
  authDomain: "kb-portfolio-89855.firebaseapp.com",
  projectId: "kb-portfolio-89855",
  storageBucket: "kb-portfolio-89855.firebasestorage.app",
  messagingSenderId: "203183135249",
  appId: "1:203183135249:web:9d4306827bbb6da088afb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db, ref, get, set, update};