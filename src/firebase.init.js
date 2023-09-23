// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdxs3f-WVQK8F2iQNB77n6YHWkwZ750QE",
    authDomain: "hotel-booking-7261c.firebaseapp.com",
    projectId: "hotel-booking-7261c",
    storageBucket: "hotel-booking-7261c.appspot.com",
    messagingSenderId: "854303606816",
    appId: "1:854303606816:web:2c54a2376d027e9a709445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;