import firebase from "firebase/app";
import "firebase/auth";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyBLRfR5lRqTjiu2qumW_a09dgvEiP8vCw0",
  authDomain: "stockscheck-1d88a.firebaseapp.com",
  projectId: "stockscheck-1d88a",
  storageBucket: "stockscheck-1d88a.appspot.com",
  messagingSenderId: "569382062644",
  appId: "1:569382062644:web:5e6d5f68934e6edbc09861",
  measurementId: "G-LBEG00Z5CB",
});

export const auth = fire.auth();
export default fire;
