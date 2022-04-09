// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuB-oTaWl7wBVjRWXpOvTJdFvkX43_pyc",
    authDomain: "ema-john-ecommerce-a872b.firebaseapp.com",
    projectId: "ema-john-ecommerce-a872b",
    storageBucket: "ema-john-ecommerce-a872b.appspot.com",
    messagingSenderId: "693993518060",
    appId: "1:693993518060:web:8b883a9a38dc4dbb3946c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;