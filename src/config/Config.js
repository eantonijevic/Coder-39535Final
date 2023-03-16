import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxNtDb0yb69rEVmsMgzJ64AGbR5r42N2k",
    authDomain: "newbright-69ecc.firebaseapp.com",
    projectId: "newbright-69ecc",
    storageBucket: "newbright-69ecc.appspot.com",
    messagingSenderId: "145239978405",
    appId: "1:145239978405:web:bdd485923d2694aa35384c"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }