import React from 'react'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBLRfR5lRqTjiu2qumW_a09dgvEiP8vCw0",
  authDomain: "stockscheck-1d88a.firebaseapp.com",
  projectId: "stockscheck-1d88a",
  storageBucket: "stockscheck-1d88a.appspot.com",
  messagingSenderId: "569382062644",
  appId: "1:569382062644:web:5e6d5f68934e6edbc09861",
  measurementId: "G-LBEG00Z5CB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Main = () => {
  return (
    <div>Main</div>
  )
}

export default Main