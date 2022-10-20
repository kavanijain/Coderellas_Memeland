
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATYWZ-aqma2oSZXh9X8L5G3A8kRGXVXnQ",
    authDomain: "memeland-bf5cb.firebaseapp.com",
    projectId: "memeland-bf5cb",
    storageBucket: "memeland-bf5cb.appspot.com",
    messagingSenderId: "875985553794",
    appId: "1:875985553794:web:a3c78bf9f610f7641e679b",
    measurementId: "G-7M40HK9EB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app) 