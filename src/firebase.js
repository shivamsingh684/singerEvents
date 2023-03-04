import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBKYEkZLHK9KbTDv6rCv5bWw-ZVHA253rg",
  authDomain: "fir-project-eda88.firebaseapp.com",
  projectId: "fir-project-eda88",
  storageBucket: "fir-project-eda88.appspot.com",
  messagingSenderId: "901730725338",
  appId: "1:901730725338:web:7760fe3e05079a224fa4e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth}