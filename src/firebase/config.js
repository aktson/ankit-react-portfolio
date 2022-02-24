import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";


//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcP9sSHPOoXQgA9ks11iX7RFCcU3qLJiI",
    authDomain: "ankit-portfolio-82aea.firebaseapp.com",
    projectId: "ankit-portfolio-82aea",
    storageBucket: "ankit-portfolio-82aea.appspot.com",
    messagingSenderId: "218598057189",
    appId: "1:218598057189:web:70750c6d8181c649e9200c",
    measurementId: "G-LTVQQ4BN8C"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };