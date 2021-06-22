import firebase from 'firebase';
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWePfYsaYZmLbOC7l7oOER_6EqLYMJd6Q",
    authDomain: "jtlibrary-pk.firebaseapp.com",
    projectId: "jtlibrary-pk",
    databaseURL: "https://jtlibrary-pk-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "jtlibrary-pk.appspot.com",
    messagingSenderId: "1033970671648",
    appId: "1:1033970671648:web:9636982efbd624141e5c45",
    measurementId: "G-KKML1BMW66"
  };

firebase.initializeApp(firebaseConfig);
