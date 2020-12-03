import firebase from "firebase";
require("dotenv").config();
const myApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "chatting-anonymous.firebaseapp.com",
    projectId: "chatting-anonymous",
    storageBucket: "chatting-anonymous.appspot.com",
    messagingSenderId: "906481963206",
    appId: "1:906481963206:web:a75e8c6ca2506504b147c7",
    measurementId: "G-TRJRGGVHRS"
});
const db = myApp.firestore();
export default db;
