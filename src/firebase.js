import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB_XTghpu6aAYhGT_sblvdYn7wbBN0etb4",
  authDomain: "codezone-14a8e.firebaseapp.com",
  projectId: "codezone-14a8e",
  storageBucket: "codezone-14a8e.appspot.com",
  messagingSenderId: "129051682829",
  appId: "1:129051682829:web:50659610714f21ff56cd44",
  measurementId: "G-B8LC61MPCG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();
export const db =getFirestore(app)