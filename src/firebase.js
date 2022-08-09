import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCyfdiVrEKxPZDQnTAb82lB4WjvO9U8KSU",

    authDomain: "e-shop-website-327ac.firebaseapp.com",

    projectId: "e-shop-website-327ac",

    storageBucket: "e-shop-website-327ac.appspot.com",

    messagingSenderId: "176655211054",

    appId: "1:176655211054:web:3b68ff67e35f81d5779dbf",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
