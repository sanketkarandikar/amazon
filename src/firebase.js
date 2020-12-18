// For Firebase JS SDK v7.20.0 and later, measurementId is optional7
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIFy4vDVdBo3eRKounELCXHmICr48bKmo",
    authDomain: "clone-27cf6.firebaseapp.com",
    projectId: "clone-27cf6",
    storageBucket: "clone-27cf6.appspot.com",
    messagingSenderId: "1036843279163",
    appId: "1:1036843279163:web:ff344417e538401bcecd1e",
    measurementId: "G-Y1EB8Q2TXG"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

export const db = firebaseapp.firestore();

export const auth = firebaseapp.auth();