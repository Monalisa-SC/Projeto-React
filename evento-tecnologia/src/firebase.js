import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeHFalxS1Z4Fojt32Z_MlG8jkz6xoLbwA",
  authDomain: "evento-tecnologia.firebaseapp.com",
  projectId: "evento-tecnologia",
  storageBucket: "evento-tecnologia.firebasestorage.app",
  messagingSenderId: "20226692170",
  appId: "1:20226692170:web:3dd181cf1774b94c8c02b3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);