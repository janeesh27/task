import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBLRfR5lRqTjiu2qumW_a09dgvEiP8vCw0",
    authDomain: "stockscheck-1d88a.firebaseapp.com",
    projectId: "stockscheck-1d88a",
    storageBucket: "stockscheck-1d88a.appspot.com",
    messagingSenderId: "569382062644",
    appId: "1:569382062644:web:5e6d5f68934e6edbc09861",
    measurementId: "G-LBEG00Z5CB"
  };
  
  
  firebase.initializeApp(firebaseConfig);

function Main() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(response) {
                console.log("Sign up successful")
                // Handle successful sign up
            })
            .catch(function(error) {
                console.log(error)
                // Handle errors
            });
    }

    return ( 
        <div className='display'>
        <form className="bg-black p-6 rounded-lg shadow-md mx-auto text-center" onSubmit={handleSubmit}>
            <label className="block font-medium mb-2">
                Email:
                <input className="form-input rounded-md py-2 px-3 leading-2 text-gray-700"  type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <label className="block font-medium mb-2">
                Password:
                <input className="form-input rounded-md py-2 px-3 leading-2 text-gray-700"  type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br />
            <button className='bg-gray-500 text-white p-3 rounded-lg' type="submit">Sign Up</button>
        </form></div>
    );
}

export default Main;
