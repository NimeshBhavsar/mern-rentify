// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7iagqxN3_KCTDqiMjyoZtGQWM_FON46U",
    authDomain: "mern-estate-9bcc7.firebaseapp.com",
    projectId: "mern-estate-9bcc7",
    storageBucket: "mern-estate-9bcc7.appspot.com",
    messagingSenderId: "288783200655",
    appId: "1:288783200655:web:5e311756e6975893401bfa",
    measurementId: "G-ZTK3XJBLKZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);